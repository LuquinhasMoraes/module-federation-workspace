import { NgModule, DoBootstrap, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { TesteBComponent } from '../teste-b/teste-b.component';
import { TesteBModule } from '../teste-b/teste-b.module';

@NgModule({
  imports: [
    BrowserModule, // Importa o BrowserModule aqui
    TesteBModule
  ],
  entryComponents: [TesteBComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WrapperTesteBModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    // Defina o componente como um custom element
    const ce = createCustomElement(TesteBComponent, { injector: this.injector });
    customElements.define('app-teste-b', ce);
  }
}
