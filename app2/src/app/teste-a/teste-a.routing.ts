import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteAComponent } from './teste-a.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';

const routes: Routes = [
  {
    path: 'teste-a',
    component: TesteAComponent,
    children: [
      {
        path: 'sub-a',
        component: ComponentAComponent
      },
      {
        path: 'sub-b',
        component: ComponentBComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesteARoutingModule { }
