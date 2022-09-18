import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { GalleryService } from 'src/app/services/gallery.service';
import { Painting } from 'src/app/shared/models/painting.model';

@Component({
  selector: 'app-edit-painting',
  templateUrl: './edit-painting.component.html',
  styleUrls: ['./edit-painting.component.scss'],
})
export class EditPaintingComponent implements OnInit {
  @Input() public painting: any;
  @Output() closeDrawer = new EventEmitter();
  public paintingForm: FormGroup;

  constructor(
    public route: ActivatedRoute,
    private galleryService: GalleryService,
    private fb: FormBuilder,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.paintingForm = this.fb.group({
      title: [this.painting.title],
      description: [this.painting.description],
      imgUrl: [this.painting.imgUrl],
      isAvaible: [this.painting.available],
    });
  }

  public editPainting() {
    const painting = this.paintingForm.value;
    painting.id = this.painting._id;
    this.galleryService.editPainting(painting);
    this.closeDrawer.emit();
    window.location.reload();
  }
}
