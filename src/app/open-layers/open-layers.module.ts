import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenLayersRoutingModule } from './open-layers-routing.module';
import { OlMapComponent } from './components/ol-map/ol-map.component';


@NgModule({
  declarations: [
    OlMapComponent
  ],
  imports: [
    CommonModule,
    OpenLayersRoutingModule
  ]
})
export class OpenLayersModule { }
