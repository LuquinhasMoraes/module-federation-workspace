import { NgModule, DoBootstrap, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { TesteAModule } from '../teste-a/teste-a.module';
import { TesteAComponent } from '../teste-a/teste-a.component';

@NgModule({
  imports: [
    BrowserModule, // Importa o BrowserModule aqui
    TesteAModule
  ],
  entryComponents: [TesteAComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WrapperModuleModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    // Defina o componente como um custom element
    const ce = createCustomElement(TesteAComponent, { injector: this.injector });
    customElements.define('app-teste-a', ce);
  }
}
