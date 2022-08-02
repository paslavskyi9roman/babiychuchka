import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-painting',
  templateUrl: './add-painting.component.html',
  styleUrls: ['./add-painting.component.scss'],
})
export class AddPaintingComponent implements OnInit {
  paintingForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.paintingForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      url: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid);
    console.log(form.value.title);
    console.log(form.value.description);
    console.log(form.value.url);
  }
}
