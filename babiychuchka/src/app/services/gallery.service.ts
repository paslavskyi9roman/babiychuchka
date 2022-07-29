import { Injectable } from '@angular/core';

import { paintingsMock } from '../shared/mock-data/paintings.mock';
import { Painting } from '../shared/models/painting.model';
@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  public paintings: Painting[] = paintingsMock;

  constructor() {}

  public getPaintings() {
    return this.paintings;
  }
}
