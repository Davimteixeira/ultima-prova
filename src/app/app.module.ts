import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElevadorComponent } from './elevador/elevador.component';
import { QuadradoComponent } from './quadrado/quadrado.component';
import { ImagemAumentadaComponent } from './imagem-aumentada/imagem-aumentada.component';

@NgModule({
  declarations: [
    AppComponent,
    ElevadorComponent,
    QuadradoComponent,
    ImagemAumentadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
