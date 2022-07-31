import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'bio',
        loadChildren: () => import('../modules/bio/bio.module').then((m) => m.BioModule),
      },
      {
        path: 'gallery',
        loadChildren: () => import('../modules/gallery/gallery.module').then((m) => m.GalleryModule),
      },
      {
        path: 'poetry',
        loadChildren: () => import('../modules/poetry/poetry.module').then((m) => m.PoetryModule),
      },
      {
        path: 'feed',
        loadChildren: () => import('../modules/feed/feed.module').then((m) => m.FeedModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('../modules/contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: '',
        redirectTo: '/gallery',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '/gallery',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
