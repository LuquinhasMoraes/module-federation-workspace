import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteARoutingModule } from './teste-a.routing';
import { createCustomElement } from '@angular/elements';
import { TesteAComponent } from './teste-a.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    TesteARoutingModule
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
