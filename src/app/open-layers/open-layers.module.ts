import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenLayersRoutingModule } from './open-layers-routing.module';
import { OlMapComponent } from './components/ol-map/ol-map.component';
import { VerMapaComponent } from './pages/ver-mapa/ver-mapa.component';
import { OlMakerComponent } from './components/ol-maker/ol-maker.component';
import { PopupComponent } from './components/popup/popup.component';
import { VerMarkersComponent } from './pages/ver-markers/ver-markers.component';
import { InputMarkerComponent } from './components/input-marker/input-marker.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OlMapComponent,
    VerMapaComponent,
    OlMakerComponent,
    PopupComponent,
    VerMarkersComponent,
    InputMarkerComponent
  ],
  imports: [
    CommonModule,
    OpenLayersRoutingModule,
    ReactiveFormsModule,
  ]
})
export class OpenLayersModule { }
