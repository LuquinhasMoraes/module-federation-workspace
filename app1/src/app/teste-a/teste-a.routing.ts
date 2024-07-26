import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteAComponent } from './teste-a.component';

const routes: Routes = [
  {
    path: 'testeA',
    component: TesteAComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesteARoutingModule { }
