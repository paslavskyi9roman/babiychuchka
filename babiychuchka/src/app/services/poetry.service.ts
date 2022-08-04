import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { poetryMock } from '../shared/mock-data/poetry.mock';
import { Poetry } from '../shared/models/poetry.model';

@Injectable({
  providedIn: 'root',
})
export class PoetryService {
  public poetryStorage$ = new BehaviorSubject<Poetry[]>(poetryMock);
  public poetry$ = this.poetryStorage$.asObservable();

  constructor() {}

  public getPaintinById(id: string): Observable<Poetry[]> {
    return this.poetry$.pipe(map((poem) => poem.filter((el) => el.id === id)));
  }
}
