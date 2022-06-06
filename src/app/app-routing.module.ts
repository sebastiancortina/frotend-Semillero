import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSemilleroComponent } from './components/list-semillero/list-semillero.component';
import { CrearSemilleroComponent } from './components/crear-semillero/crear-semillero.component';

const routes: Routes = [
  { path: '', component: ListSemilleroComponent},
  { path: 'crear-semillero', component: CrearSemilleroComponent},
  { path: 'editar-semillero', component: CrearSemilleroComponent},
 // { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
