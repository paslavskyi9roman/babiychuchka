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
  public paintingId: string;

  constructor(private galleryService: GalleryService, private route: ActivatedRoute) {}

  public ngOnInit() {
    this.galleryService.getPaintings();

    this.getPaintingId();
    this.getPaintinById(this.paintingId);
  }

  public getPaintingId(): void {
    this.route.paramMap.subscribe((params: ParamMap) => (this.paintingId = String(params.get('id'))));
  }

  public getPaintinById(id: string): void {
    this.galleryService.getPaintinById(id).subscribe((painting) => {
      this.painting = Object.assign({}, ...painting);
    });
  }
}
