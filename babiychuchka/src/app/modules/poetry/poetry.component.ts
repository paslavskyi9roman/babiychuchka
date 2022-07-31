import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { PoetryService } from 'src/app/services/poetry.service';
import { Poetry } from 'src/app/shared/models/poetry.model';

@Component({
  selector: 'app-poetry',
  templateUrl: './poetry.component.html',
  styleUrls: ['./poetry.component.scss'],
})
export class PoetryComponent implements OnInit {
  public poetry$: Observable<Poetry[]>;

  constructor(private poetryService: PoetryService) {}

  public ngOnInit(): void {
    this.poetry$ = this.poetryService.poetry$;
  }
}
