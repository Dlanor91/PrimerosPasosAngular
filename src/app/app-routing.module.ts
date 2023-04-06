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
  {path:"**",component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
