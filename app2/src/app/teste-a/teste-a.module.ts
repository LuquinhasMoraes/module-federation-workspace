import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteARoutingModule } from './teste-a.routing';
import { createCustomElement } from '@angular/elements';
import { TesteAComponent } from './teste-a.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [

    {
      path: 'teste-a/sub-a',
      component: ComponentAComponent
    },
    {
      path: 'teste-a/sub-b',
      component: ComponentBComponent
    }

];

@NgModule({
  declarations: [
    ComponentAComponent,
    ComponentBComponent,
    TesteAComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TesteAModule implements DoBootstrap {

  constructor(private injector: Injector) {

  }

  ngDoBootstrap(): void {
    const ce = createCustomElement(TesteAComponent, {injector: this.injector});
    customElements.define('app-teste-a', ce);
  }
}
