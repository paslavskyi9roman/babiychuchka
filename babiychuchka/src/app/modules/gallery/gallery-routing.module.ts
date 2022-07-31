import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { PaintingComponent } from './painting/painting.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
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
