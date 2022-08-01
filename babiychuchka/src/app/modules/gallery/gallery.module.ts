import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { PaintingComponent } from './painting/painting.component';
import { AddPaintingComponent } from './add-painting/add-painting.component';
import { EditPaintingComponent } from './edit-painting/edit-painting.component';

@NgModule({
  declarations: [GalleryComponent, PaintingComponent, AddPaintingComponent, EditPaintingComponent],
  imports: [CommonModule, GalleryRoutingModule],
})
export class GalleryModule {}
