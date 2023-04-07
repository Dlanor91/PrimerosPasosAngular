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
import { ComunicacionComponent } from './ejemplos/comunicacion/comunicacion.component';
import { Comunicacion2Component } from './ejemplos/comunicacion2/comunicacion2.component';
import { HomeComponent } from './paginas/home/home.component';
import { Ruta2Component } from './paginas/ruta2/ruta2.component';
import { FormulariosComponent } from './paginas/formularios/formularios.component';
import { MaterialComponent } from './paginas/material/material.component';
import { ErrorComponent } from './paginas/error/error.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Formularios2Component } from './paginas/formularios2/formularios2.component';
import { ValidaSelectDirective } from './validaciones/valida-select.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialBotonesComponent } from './paginas/material-botones/material-botones.component';
import { MaterialInputComponent } from './paginas/material-input/material-input.component';
import { MaterialTabsComponent } from './paginas/material-tabs/material-tabs.component';
import { MaterialDialogsComponent } from './paginas/material-dialogs/material-dialogs.component';
import { MaterialCardsComponent } from './paginas/material-cards/material-cards.component';
import { MaterialPanelExpansionComponent } from './paginas/material-panel-expansion/material-panel-expansion.component';

//material
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

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
    CicloDeVidaComponent,
    ComunicacionComponent,
    Comunicacion2Component,
    HomeComponent,
    Ruta2Component,
    FormulariosComponent,
    MaterialComponent,
    ErrorComponent,
    CabeceroComponent,
    FooterComponent,
    Formularios2Component,
    ValidaSelectDirective, 
    MaterialBotonesComponent, MaterialInputComponent, MaterialTabsComponent, MaterialDialogsComponent, MaterialCardsComponent, MaterialPanelExpansionComponent       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
