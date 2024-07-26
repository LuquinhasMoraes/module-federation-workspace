import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteAComponent } from './teste-a/teste-a.component';
import { TesteAModule } from './teste-a/teste-a.module';

@NgModule({
  declarations: [
    AppComponent,
    TesteAComponent
  ],
  imports: [
    BrowserModule,
    TesteAModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
