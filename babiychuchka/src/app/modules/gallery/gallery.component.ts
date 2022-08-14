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
  public drawerState = false;

  constructor(private galleryService: GalleryService) {}

  public ngOnInit(): void {
    this.galleryService.getPaintings();
    this.paintings$ = this.galleryService.paintings$;
  }

  public toggleDrawer(): void {
    this.drawerState = !this.drawerState;
  }
}
