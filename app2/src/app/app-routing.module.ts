import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TesteAComponent } from './teste-a/teste-a.component';
import { HomeComponent } from './home/home.component';
import { TesteBComponent } from './teste-b/teste-b.component';

const routes: Routes = [
  {
    path: 'teste-a',
    loadChildren: () => import('./teste-a/teste-a.module').then(m => m.TesteAModule),
  },
  {
    path: 'teste-b',
    loadChildren: () => import('./teste-b/teste-b.module').then(m => m.TesteBModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
