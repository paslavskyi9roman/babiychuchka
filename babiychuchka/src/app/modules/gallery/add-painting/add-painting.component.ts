import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-add-painting',
  templateUrl: './add-painting.component.html',
  styleUrls: ['./add-painting.component.scss'],
})
export class AddPaintingComponent implements OnInit {
  public paintingForm: FormGroup;
  @Output() public closeDrawer = new EventEmitter();

  constructor(private fb: FormBuilder, private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.paintingForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      imgUrl: ['', Validators.required],
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
    this.paintingForm.reset();
    this.closeDrawer.emit();
  }
}
