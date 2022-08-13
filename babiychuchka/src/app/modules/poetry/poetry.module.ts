import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PoetryRoutingModule } from './poetry-routing.module';
import { PoetryComponent } from './poetry.component';
import { PoemComponent } from './poem/poem.component';
import { AddPoemComponent } from './add-poem/add-poem.component';
import { EditPoemComponent } from './edit-poem/edit-poem.component';

@NgModule({
  declarations: [PoetryComponent, PoemComponent, AddPoemComponent, EditPoemComponent],
  imports: [CommonModule, PoetryRoutingModule],
})
export class PoetryModule {}
