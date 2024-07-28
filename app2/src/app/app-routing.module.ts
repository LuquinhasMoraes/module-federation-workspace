import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TesteAComponent } from './teste-a/teste-a.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'teste-a',
    loadChildren: () => import('./teste-a/teste-a.module').then(m => m.TesteAModule),
  },
  {
    path: 'teste-b',
    loadChildren: () => import('./teste-b/teste-b.module').then(m => m.TesteBModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
