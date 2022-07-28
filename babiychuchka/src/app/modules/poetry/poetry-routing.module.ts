import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoetryComponent } from './poetry.component';

const routes: Routes = [
  {
    path: '',
    component: PoetryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoetryRoutingModule {}
