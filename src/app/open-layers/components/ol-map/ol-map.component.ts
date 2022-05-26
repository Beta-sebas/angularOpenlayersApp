import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import OSM from 'ol/source/OSM';
import * as Proj from 'ol/proj'

export const DEFAULT_HEIGHT = '500px';
export const DEFAULT_WIDTH = '500px';

@Component({
  selector: 'app-ol-map',
  templateUrl: './ol-map.component.html',
  styleUrls: ['./ol-map.component.css']
})
export class OlMapComponent implements OnInit {

  //Inputs para recibir los datos
  @Input() lat   !: number;
  @Input() lon   !: number;
  @Input() zoom  !: number;
  @Input() width: string | number = DEFAULT_WIDTH;
  @Input() height: string | number = DEFAULT_HEIGHT;

  //Referencia al div de la vista
  @ViewChild('divMap') divMap!: ElementRef<HTMLDivElement>

  map!: Map;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.setSize();
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: Proj.fromLonLat([this.lon, this.lat]),
        zoom: this.zoom
      })
    })

  }

  setSize() {
    if (this.divMap) {
      const style = this.divMap.nativeElement.style;
      style.width = this.width.toString() || DEFAULT_WIDTH;
      style.height = this.height.toString() || DEFAULT_HEIGHT;

    }
  }

}
