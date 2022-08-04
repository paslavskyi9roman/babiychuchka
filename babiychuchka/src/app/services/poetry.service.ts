import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable, Subject } from 'rxjs';

import { Poetry } from '../shared/models/poetry.model';

@Injectable({
  providedIn: 'root',
})
export class PoetryService {
  public poetryStorage$ = new Subject<Poetry[]>();
  public poetry$ = this.poetryStorage$.asObservable();

  constructor(private http: HttpClient) {}

  public getPoetry() {
    this.http.get<{ message: string; poetry: Poetry[] }>('http://localhost:3000/api/poetry').subscribe((data) => {
      this.poetryStorage$.next([...data.poetry]);
    });
  }

  public getPoemById(id: string): Observable<Poetry[]> {
    return this.poetry$.pipe(map((poem) => poem.filter((el) => el.id === id)));
  }
}
