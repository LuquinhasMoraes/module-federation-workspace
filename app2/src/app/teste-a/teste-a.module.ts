import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteARoutingModule } from './teste-a.routing';
import { createCustomElement } from '@angular/elements';
import { TesteAComponent } from './teste-a.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { BrowserModule } from '@angular/platform-browser';
import { TesteBComponent } from '../teste-b/teste-b.component';

const routes: Routes = [

    {
      path: 'teste-a/sub-a',
      component: ComponentAComponent
    },
    {
      path: 'teste-a/sub-b',
      component: ComponentBComponent
    },


];

@NgModule({
  declarations: [
    ComponentAComponent,
    ComponentBComponent,
    TesteAComponent,
    TesteBComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [TesteAComponent, TesteBComponent]
})
export class TesteAModule implements DoBootstrap {

  constructor(private injector: Injector) {

  }

  ngDoBootstrap(): void {
    const ce = createCustomElement(TesteAComponent, {injector: this.injector});

    customElements.define('app-teste-a', ce);
    customElements.define('app-component-a', createCustomElement(ComponentAComponent, {injector: this.injector}));
    customElements.define('app-component-b', createCustomElement(ComponentBComponent, {injector: this.injector}));
  }
}
