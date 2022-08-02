import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';

import { paintingsMock } from '../shared/mock-data/paintings.mock';
import { Painting } from '../shared/models/painting.model';
@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  public paintingsStorage$ = new BehaviorSubject<Painting[]>(paintingsMock);
  public paintings$ = this.paintingsStorage$.asObservable();

  constructor() {}

  public getPaintinById(id: string): Observable<Painting[]> {
    return this.paintings$.pipe(map((painting) => painting.filter((el) => el.id === id)));
  }

  // public addPainting(painting: Painting) {
  //   paintingsMock.push(painting);
  // }

  public addPainting(painting: Painting) {
    this.paintings$.pipe(take(1)).subscribe((paintings) => {
      this.paintingsStorage$.next([...paintings, painting]);
    });
  }
}
