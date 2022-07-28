import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from 'src/app/modules/bio/bio.component';

const routes: Routes = [
  {
    path: '',
    component: BioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioRoutingModule {}
