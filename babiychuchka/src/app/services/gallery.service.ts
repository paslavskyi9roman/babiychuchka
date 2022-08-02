import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, take } from 'rxjs';

import { Painting } from '../shared/models/painting.model';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private paintingsStorage$ = new Subject<Painting[]>();
  public paintings$ = this.paintingsStorage$.asObservable();

  constructor(private http: HttpClient) {}

  public getPaintings() {
    this.http
      .get<{ message: string; paintings: Painting[] }>('http://localhost:3000/api/paintings')
      .subscribe((data) => {
        this.paintingsStorage$.next([...data.paintings]);
      });
  }

  public getPaintinById(id: string): Observable<Painting[]> {
    return this.paintings$.pipe(map((painting) => painting.filter((el) => el.id === id)));
  }

  public addPainting(painting: Painting) {
    this.paintings$.pipe(take(1)).subscribe((paintings) => {
      this.paintingsStorage$.next([...paintings, painting]);
    });
  }
}
