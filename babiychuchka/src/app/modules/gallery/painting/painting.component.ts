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
  public painting: any;
  public paintingId: string;
  public drawerState = false;
  public isLoading = false;

  constructor(private galleryService: GalleryService, private route: ActivatedRoute, private router: Router) {}

  public ngOnInit() {
    this.getPaintingId();
  }

  public getPaintingId(): void {
    this.isLoading = true;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.paintingId = String(params.get('id'));

      this.galleryService.getPainting(this.paintingId).subscribe((data) => {
        this.isLoading = false;
        this.painting = data as Painting;
      });
    });
  }

  public confirmDelete(): void {
    let confirmDelete = confirm('are you sure wanna delete this painting?');
    if (confirmDelete) {
      this.onDelete();
    }
  }

  public onDelete(): void {
    this.galleryService.deletePainting(this.painting._id);
    this.router.navigate(['/gallery'], { relativeTo: this.route });
  }

  public toggleDrawer(): void {
    this.drawerState = !this.drawerState;
  }
}
