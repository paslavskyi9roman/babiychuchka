import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { poetryMock } from '../shared/mock-data/poetry.mock';
import { Poetry } from '../shared/models/poetry.model';

@Injectable({
  providedIn: 'root',
})
export class PoetryService {
  public poetryStorage$ = new BehaviorSubject<Poetry[]>(poetryMock);
  public poetry$ = this.poetryStorage$.asObservable();

  constructor() {}
}
