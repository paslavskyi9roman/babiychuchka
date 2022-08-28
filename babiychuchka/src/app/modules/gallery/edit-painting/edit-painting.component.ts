import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GalleryService } from 'src/app/services/gallery.service';
import { Painting } from 'src/app/shared/models/painting.model';

@Component({
  selector: 'app-edit-painting',
  templateUrl: './edit-painting.component.html',
  styleUrls: ['./edit-painting.component.scss'],
})
export class EditPaintingComponent implements OnInit {
  @Input() public painting: Painting;

  constructor(public route: ActivatedRoute, public galleryService: GalleryService) {}

  public ngOnInit(): void {
    console.log('');
  }

  public editPainting(painting: Painting) {
    this.galleryService.editPainting(painting);
  }
}
