import { Injectable } from '@angular/core';

import { poetryMock } from '../shared/mock-data/poetry.mock';
import { Poetry } from '../shared/models/poetry.model';

@Injectable({
  providedIn: 'root',
})
export class PoetryService {
  public poetry: Poetry[] = poetryMock;

  constructor() {}

  public getPoetry() {
    return this.poetry;
  }
}
