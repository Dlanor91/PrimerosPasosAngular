import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { FormulariosComponent } from './paginas/formularios/formularios.component';
import { MaterialComponent } from './paginas/material/material.component';
import { Ruta2Component } from './paginas/ruta2/ruta2.component';
import { BasicosComponent } from './ejemplos/basicos/basicos.component';
import { Ejemplo5Component } from './ejemplos/ejemplo5/ejemplo5.component';
import { CicloDeVidaComponent } from './ejemplos/ciclo-de-vida/ciclo-de-vida.component';
import { ComunicacionComponent } from './ejemplos/comunicacion/comunicacion.component';
import { DataBindingComponent } from './ejemplos/data-binding/data-binding.component';
import { ErrorComponent } from './paginas/error/error.component';
import { Formularios2Component } from './paginas/formularios2/formularios2.component';
import { MaterialBotonesComponent } from './paginas/material-botones/material-botones.component';
import { MaterialInputComponent } from './paginas/material-input/material-input.component';
import { MaterialTabsComponent } from './paginas/material-tabs/material-tabs.component';
import { MaterialDialogsComponent } from './paginas/material-dialogs/material-dialogs.component';
import { MaterialPanelExpansionComponent } from './paginas/material-panel-expansion/material-panel-expansion.component';
import { MaterialCardsComponent } from './paginas/material-cards/material-cards.component';
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


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"formularios",component:FormulariosComponent},
  {path:"formularios2",component:Formularios2Component},
  {path:"material",component:MaterialComponent},
  {path:"ruta-2/:id/:slug",component:Ruta2Component},
  {path:"basicos",component:BasicosComponent},
  {path:"ejemplo-5",component:Ejemplo5Component},
  {path:"data-binding",component:DataBindingComponent},
  {path:"ciclo-vida",component:CicloDeVidaComponent},
  {path:"comunicacion",component:ComunicacionComponent},
  {path:"material/botones",component:MaterialBotonesComponent},
  {path:"material/input",component:MaterialInputComponent},
  {path:"material/tabs",component:MaterialTabsComponent},
  {path:"material/dialogs",component:MaterialDialogsComponent},
  {path:"material/panel-expansion",component:MaterialPanelExpansionComponent},
  {path:"material/cards",component:MaterialCardsComponent},
  {path:"modal",component:ModalComponent},
  {path:"modal-formulario",component:ModalFormularioComponent},
  {path:"moment",component:MomentComponent},
  {path:"graficos",component:GraficosComponent},
  {path:"mapas",component:MapasComponent},
  {path:"mapas-google",component:MapasGoogleComponent},
  {path:"mapas-mapbox",component:MapasGMapboxComponent},
  {path:"servicios",component:ServiciosComponent},
  {path:"localstorage",component:LocalstorageComponent},
  {path:"localstorage2",component:Localstorage2Component},  
  {path:"sessionstorage",component:SessionStorageComponent},
  {path:"sessionstorage2",component:SessionStorage2Component},
  {path:"cookie",component:CookieComponent},
  {path:"cookie2",component:Cookie2Component},
  {path:"**",component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
