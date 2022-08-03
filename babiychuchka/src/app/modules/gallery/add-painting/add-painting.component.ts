import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-add-painting',
  templateUrl: './add-painting.component.html',
  styleUrls: ['./add-painting.component.scss'],
})
export class AddPaintingComponent implements OnInit {
  paintingForm: FormGroup;

  constructor(private fb: FormBuilder, private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.paintingForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      url: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.paintingForm.invalid) {
      return;
    }
    const newPainting = this.paintingForm.value;
    newPainting.id = Math.floor(Math.random() * 10000) + 1;
    newPainting.available = true;
    this.galleryService.addPainting(newPainting);
  }
}
