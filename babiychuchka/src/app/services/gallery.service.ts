import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { paintingsMock } from '../shared/mock-data/paintings.mock';
import { Painting } from '../shared/models/painting.model';
@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  public paintingsStorage$ = new BehaviorSubject<Painting[]>(paintingsMock);
  public paintings$ = this.paintingsStorage$.asObservable();

  constructor() {}
}
