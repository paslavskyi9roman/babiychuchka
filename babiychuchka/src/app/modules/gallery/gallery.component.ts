import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryService } from 'src/app/services/gallery.service';
import { Painting } from 'src/app/shared/models/painting.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public paintings$: Observable<Painting[]>;

  constructor(private galleryService: GalleryService) {}

  public ngOnInit(): void {
    this.paintings$ = this.galleryService.paintings$;
  }
}
