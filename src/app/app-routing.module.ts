import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoCreateComponent } from './pedido-create/pedido-create.component';
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { PedidoDetalleComponent } from './pedido-detalle/pedido-detalle.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'create', component: PedidoCreateComponent },
  { path: 'list', component: PedidoListComponent },
  { path: 'detalle/:id', component: PedidoDetalleComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
