import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//rutas principales
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './ejemplos/ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './ejemplos/ejemplo4/ejemplo4.component';
import { BasicosComponent } from './ejemplos/basicos/basicos.component';
import { Ejemplo5Component } from './ejemplos/ejemplo5/ejemplo5.component';
import { FormateaFechaPipe } from './utilidades/formatea-fecha.pipe';
import { FormateaNumerosPipe } from './utilidades/formatea-numeros.pipe';
import { DataBindingComponent } from './ejemplos/data-binding/data-binding.component';
import { CicloDeVidaComponent } from './ejemplos/ciclo-de-vida/ciclo-de-vida.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejemplo2Component,
    Ejemplo3Component,
    Ejemplo4Component,
    BasicosComponent,
    Ejemplo5Component,
    FormateaFechaPipe,
    FormateaNumerosPipe,
    DataBindingComponent,
    CicloDeVidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
