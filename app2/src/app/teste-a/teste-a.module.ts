import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteARoutingModule } from './teste-a.routing';
import { createCustomElement } from '@angular/elements';
import { TesteAComponent } from './teste-a.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ComponentAComponent,
    ComponentBComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    TesteARoutingModule,
    RouterModule.forRoot([])
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
