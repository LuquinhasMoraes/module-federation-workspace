import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TesteAComponent } from './teste-a/teste-a.component';

const routes: Routes = [

  {
    path: 'aaa',
    loadChildren: () => import('./teste-a/teste-a.module').then(m => m.TesteAModule),
  },
  {
    path: 'bbb',
    loadChildren: () => import('./teste-b/teste-b.module').then(m => m.TesteBModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
