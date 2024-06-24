import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/module-federation';


const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule({
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          remoteName: 'app1',
          exposedModule: './Module'
      })
      .then(m => m.AppModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
