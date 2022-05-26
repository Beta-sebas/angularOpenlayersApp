import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerMapaComponent } from './pages/ver-mapa/ver-mapa.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:'map', component: VerMapaComponent},
      {path: '**', redirectTo: 'map'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenLayersRoutingModule { }
