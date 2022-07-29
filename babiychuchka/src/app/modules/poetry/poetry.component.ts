import { Component, OnInit } from '@angular/core';
import { PoetryService } from 'src/app/services/poetry.service';
import { Painting } from 'src/app/shared/models/painting.model';
import { Poetry } from 'src/app/shared/models/poetry.model';

@Component({
  selector: 'app-poetry',
  templateUrl: './poetry.component.html',
  styleUrls: ['./poetry.component.scss'],
})
export class PoetryComponent implements OnInit {
  public poetry: Poetry[];

  constructor(private poetryService: PoetryService) {}

  public ngOnInit(): void {
    this.poetry = this.poetryService.getPoetry();
  }
}
