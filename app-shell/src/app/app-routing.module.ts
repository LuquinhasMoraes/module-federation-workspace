import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  startsWith,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { CustomComponent } from './custom/custom.component';
import { WebComponentWrapper } from './web-component-wrapper';
import { AppCustomPreloader } from './utils/app-custom-preloader';

const routes: Routes = [
  {
    path: '',
    component: CustomComponent,
  },
  {
    path: 'angular1',
    data: {
      preload: true,
    },
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'app1',
        exposedModule: './Module',
      }).then((m) => m.AppModule),
  },
  {
    // matcher: startsWith('teste-b'),
    path: 'teste-b',
    component: WebComponentWrapper,
    data: {
      preload: true,
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './teste-b',
      elementName: 'app-teste-b',
      remoteName: 'angular1',
    } as WebComponentWrapperOptions,
  },
  {
    matcher: startsWith('teste-a'),
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './teste-a',
      elementName: 'app-teste-a',
      remoteName: 'angular1',
    } as WebComponentWrapperOptions,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: AppCustomPreloader,
    }),
  ],
  exports: [RouterModule],
  providers: [AppCustomPreloader],
})
export class AppRoutingModule {}
