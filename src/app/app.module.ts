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
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Formularios2Component } from './paginas/formularios2/formularios2.component';
import { ValidaSelectDirective } from './validaciones/valida-select.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialBotonesComponent } from './paginas/material-botones/material-botones.component';
import { MaterialInputComponent } from './paginas/material-input/material-input.component';
import { MaterialTabsComponent } from './paginas/material-tabs/material-tabs.component';
import { MaterialDialogsComponent } from './paginas/material-dialogs/material-dialogs.component';
import { MaterialCardsComponent } from './paginas/material-cards/material-cards.component';
import { MaterialPanelExpansionComponent } from './paginas/material-panel-expansion/material-panel-expansion.component';
import { ModalComponent } from './paginas/modal/modal.component';
import { ModalFormularioComponent } from './paginas/modal-formulario/modal-formulario.component';
import { MomentComponent } from './paginas/moment/moment.component';
import { GraficosComponent } from './paginas/graficos/graficos.component';
import { MapasComponent } from './paginas/mapas/mapas.component';
import { MapasGoogleComponent } from './paginas/mapas-google/mapas-google.component';
import { MapasGMapboxComponent } from './paginas/mapas-gmapbox/mapas-gmapbox.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { LocalstorageComponent } from './paginas/localstorage/localstorage.component';
import { Localstorage2Component } from './paginas/localstorage2/localstorage2.component';
import { SessionStorageComponent } from './paginas/session-storage/session-storage.component';
import { SessionStorage2Component } from './paginas/session-storage2/session-storage2.component';
import { CookieComponent } from './paginas/cookie/cookie.component';
import { Cookie2Component } from './paginas/cookie2/cookie2.component';
import { ApiRestComponent } from './paginas/api-rest/api-rest.component';

//material-angular
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { PrimerosPasosComponent } from './paginas/primeros-pasos/primeros-pasos.component';
import { ApiRestCategoriasComponent } from './paginas/api-rest-categorias/api-rest-categorias.component';

//Componente de grafico
import { GoogleChartsModule } from 'angular-google-charts';

//Componente de Cookie
import { CookieService } from 'ngx-cookie-service';

//Http Client Module
import { HttpClientModule } from '@angular/common/http';
import { ApiRestCategoriasAddComponent } from './paginas/api-rest-categorias-add/api-rest-categorias-add.component';
import { ApiRestCategoriasEditComponent } from './paginas/api-rest-categorias-edit/api-rest-categorias-edit.component';
import { ApiRestProductosComponent } from './paginas/api-rest-productos/api-rest-productos.component';

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
    MaterialBotonesComponent, 
    MaterialInputComponent, 
    MaterialTabsComponent, 
    MaterialDialogsComponent, 
    MaterialCardsComponent,
    MaterialPanelExpansionComponent,
    ModalComponent,
    ModalFormularioComponent,
    MomentComponent,
    GraficosComponent,
    MapasComponent,
    MapasGoogleComponent,
    MapasGMapboxComponent,
    ServiciosComponent,
    LocalstorageComponent,
    Localstorage2Component,    
    SessionStorageComponent, 
    SessionStorage2Component, 
    CookieComponent, 
    Cookie2Component, ApiRestComponent, PrimerosPasosComponent, ApiRestCategoriasComponent, ApiRestCategoriasAddComponent, ApiRestCategoriasEditComponent, ApiRestProductosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDialogModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    GoogleChartsModule
   ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
