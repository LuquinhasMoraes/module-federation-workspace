import { DoBootstrap, NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteBRoutingModule } from './teste-b.routing';
import { createCustomElement } from '@angular/elements';
import { TesteBComponent } from './teste-b.component';
import { BrowserModule } from '@angular/platform-browser';
import { SubBComponent } from './sub-b/sub-b.component';



@NgModule({
  declarations: [
    SubBComponent
  ],
  imports: [
    CommonModule,
    TesteBRoutingModule
  ]
})
export class TesteBModule implements DoBootstrap {

  constructor(private injector: Injector) {

  }

  ngDoBootstrap(): void {
    const ce = createCustomElement(TesteBComponent, {injector: this.injector});
    customElements.define('app-teste-b', ce);
  }
}
