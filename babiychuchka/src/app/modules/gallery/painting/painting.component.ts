import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
  public drawerState = false;

  constructor(private galleryService: GalleryService, private route: ActivatedRoute, private router: Router) {}

  public ngOnInit() {
    this.getPaintingId();
    this.painting = this.galleryService.getPaintingById(this.paintingId) as Painting;
  }

  public getPaintingId(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.paintingId = String(params.get('id'));
    });
  }

  public confirmDelete(): void {
    let confirmDelete = confirm('are you sure wanna delete this painting?');
    if (confirmDelete) {
      this.onDelete();
    }
  }

  public onDelete(): void {
    this.galleryService.deletePainting(this.paintingId);
    this.router.navigate(['/gallery'], { relativeTo: this.route });
  }

  public toggleDrawer(): void {
    this.drawerState = !this.drawerState;
  }
}
