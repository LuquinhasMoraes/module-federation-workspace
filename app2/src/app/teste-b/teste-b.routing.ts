import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteBComponent } from './teste-b.component';

const routes: Routes = [
  {
    path: 'teste-b',
    component: TesteBComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesteBRoutingModule { }
