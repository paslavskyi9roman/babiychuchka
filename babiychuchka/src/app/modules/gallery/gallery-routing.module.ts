import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPaintingComponent } from './add-painting/add-painting.component';
import { EditPaintingComponent } from './edit-painting/edit-painting.component';
import { GalleryComponent } from './gallery.component';
import { PaintingComponent } from './painting/painting.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
  },
  {
    path: 'add-painting',
    component: AddPaintingComponent,
  },
  {
    path: 'edit-painting/:id',
    component: EditPaintingComponent,
  },
  {
    path: ':id',
    children: [
      {
        path: '',
        component: PaintingComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/gallery',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
