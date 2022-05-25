import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OlMapComponent } from './components/ol-map/ol-map.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:'map', component: OlMapComponent},
      {path: '**', redirectTo: 'map'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenLayersRoutingModule { }
