import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearSemilleroComponent } from './components/crear-semillero/crear-semillero.component';
import { ListSemilleroComponent } from './components/list-semillero/list-semillero.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearSemilleroComponent,
    ListSemilleroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
