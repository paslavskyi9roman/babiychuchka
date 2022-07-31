import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GalleryService } from 'src/app/services/gallery.service';
import { Painting } from 'src/app/shared/models/painting.model';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.scss'],
})
export class PaintingComponent implements OnInit {
  public painting: Painting;
  public paintingId: string | number;

  constructor(private galleryService: GalleryService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => (this.paintingId = Number(params.get('id'))));

    this.galleryService.getPaintinById(this.paintingId + '').subscribe((v) => {
      this.painting = Object.assign({}, ...v);
    });
  }
}
