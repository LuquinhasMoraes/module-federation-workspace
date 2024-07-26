import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { createCustomElement } from '@angular/elements';
import { TesteAModule } from './teste-a/teste-a.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TesteBRoutingModule } from './teste-b/teste-b.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterTestingModule,
    TesteAModule,
    TesteBRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {

  }

  ngDoBootstrap(): void {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('angular1', ce);
  }

}
