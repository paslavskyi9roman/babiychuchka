import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPoemComponent } from './add-poem/add-poem.component';
import { EditPoemComponent } from './edit-poem/edit-poem.component';
import { PoemComponent } from './poem/poem.component';
import { PoetryComponent } from './poetry.component';

const routes: Routes = [
  {
    path: '',
    component: PoetryComponent,
  },

  {
    path: 'add-poem',
    component: AddPoemComponent,
  },
  {
    path: 'edit-poem/:id',
    component: EditPoemComponent,
  },
  {
    path: ':id',
    children: [
      {
        path: '',
        component: PoemComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/poetry',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoetryRoutingModule {}
