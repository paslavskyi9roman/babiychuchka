import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { PaintingComponent } from './painting/painting.component';
import { AddPaintingComponent } from './add-painting/add-painting.component';
import { EditPaintingComponent } from './edit-painting/edit-painting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [GalleryComponent, PaintingComponent, AddPaintingComponent, EditPaintingComponent],
  imports: [CommonModule, GalleryRoutingModule, ReactiveFormsModule, SharedModule],
})
export class GalleryModule {}
