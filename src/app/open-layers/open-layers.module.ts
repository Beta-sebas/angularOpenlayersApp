import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenLayersRoutingModule } from './open-layers-routing.module';
import { OlMapComponent } from './components/ol-map/ol-map.component';
import { VerMapaComponent } from './pages/ver-mapa/ver-mapa.component';


@NgModule({
  declarations: [
    OlMapComponent,
    VerMapaComponent
  ],
  imports: [
    CommonModule,
    OpenLayersRoutingModule
  ]
})
export class OpenLayersModule { }
