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
import { ApiRestComponent } from './paginas/api-rest/api-rest.component';
import { PrimerosPasosComponent } from './paginas/primeros-pasos/primeros-pasos.component';
import { ApiRestCategoriasComponent } from './paginas/api-rest-categorias/api-rest-categorias.component';
import { ApiRestCategoriasAddComponent } from './paginas/api-rest-categorias-add/api-rest-categorias-add.component';
import { ApiRestCategoriasEditComponent } from './paginas/api-rest-categorias-edit/api-rest-categorias-edit.component';
import { ApiRestProductosComponent } from './paginas/api-rest-productos/api-rest-productos.component';
import { ApiRestProductosPorCategoriaComponent } from './paginas/api-rest-productos-por-categoria/api-rest-productos-por-categoria.component';
import { ApiRestProductosBuscadorComponent } from './paginas/api-rest-productos-buscador/api-rest-productos-buscador.component';
import { ProductosAddComponent } from './paginas/productos-add/productos-add.component';
import { ApiRestProductosEditComponent } from './paginas/api-rest-productos-edit/api-rest-productos-edit.component';
import { ApiRestProductosFotosComponent } from './paginas/api-rest-productos-fotos/api-rest-productos-fotos.component';


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
  {path:"primeros-pasos",component:PrimerosPasosComponent},
  {path:"api-rest",component:ApiRestComponent},
  {path:"api/categorias",component:ApiRestCategoriasComponent},
  {path:"api/categorias/add",component:ApiRestCategoriasAddComponent},
  {path:"api/categorias/edit/:id",component:ApiRestCategoriasEditComponent},
  {path:"api/productos",component:ApiRestProductosComponent},
  {path:"api/productos-categoria/:slug",component:ApiRestProductosPorCategoriaComponent},
  {path:"api/productos-buscar",component:ApiRestProductosBuscadorComponent},
  {path:"api/productos/add",component:ProductosAddComponent},
  {path:"api/productos/editar/:id",component:ApiRestProductosEditComponent},
  {path:"api/productos/fotos/:id",component:ApiRestProductosFotosComponent},
  {path:"**",component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
