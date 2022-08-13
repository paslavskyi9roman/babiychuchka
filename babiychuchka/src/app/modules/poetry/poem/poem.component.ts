import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PoetryService } from 'src/app/services/poetry.service';
import { Poetry } from 'src/app/shared/models/poetry.model';

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.scss'],
})
export class PoemComponent implements OnInit {
  public poem: Poetry;
  public poemId: string;

  constructor(private poetryService: PoetryService, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.poetryService.getPoetry();

    this.getPoemId();
    this.getPoemById(this.poemId);
  }

  public getPoemId(): void {
    this.route.paramMap.subscribe((params: ParamMap) => (this.poemId = String(params.get('id'))));
  }

  public getPoemById(id: string): void {
    this.poetryService.getPoemById(id).subscribe((poem) => {
      this.poem = Object.assign({}, ...poem);
    });
  }
}
