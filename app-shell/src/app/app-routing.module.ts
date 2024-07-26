import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { CustomComponent } from './custom/custom.component';
import { WebComponentWrapper } from './web-component-wrapper';


const routes: Routes = [
  {
    path: '',
    component: CustomComponent
  },
  {
    path: 'angular1',
    loadChildren: () =>
      loadRemoteModule({
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          remoteName: 'app1',
          exposedModule: './Module'
      })
      .then(m => m.AppModule)
  },
  {
    path: 'teste-b',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './teste-b',
      elementName: 'app-teste-b',
      remoteName: 'angular1'
    } as WebComponentWrapperOptions
},
{
  path: 'teste-a',
  component: WebComponentWrapper,
  data: {
    remoteEntry: 'http://localhost:4202/remoteEntry.js',
    exposedModule: './teste-a',
    elementName: 'app-teste-a',
    remoteName: 'angular1'
  } as WebComponentWrapperOptions
},
  // {
  //   path: 'app2',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //         remoteEntry: 'http://localhost:4202/remoteEntry.js',
  //         remoteName: 'app2',
  //         exposedModule: './Module'
  //     })
  //     .then(m => m.AppModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
