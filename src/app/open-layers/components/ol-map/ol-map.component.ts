import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import Overlay from 'ol/Overlay';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import XYZ from 'ol/source/XYZ';
import OSM from 'ol/source/OSM';
import * as Proj from 'ol/proj'
import VectorSource from 'ol/source/Vector';

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

  //Referencia al div contenedor del ol-map
  @ViewChild('divMap') divMap!: ElementRef<HTMLDivElement>
  //Referencia a el popup
  //@ViewChild( 'divpop' ) divpop!: ElementRef<HTMLElement>


  map!: Map;
  popup!: Overlay
  popupR!: Overlay
  divpop!: HTMLElement
  divpopR!: HTMLElement

  constructor() { }

  ngOnInit(): void {

    //Referencia a el popup
    this.divpop = document.getElementById('popup')!;
    this.divpopR = document.getElementById('popupR')!;
    //this.divpop! = document.getElementById('popup');
    this.popup = new Overlay({
      element: this.divpop,
      positioning: 'bottom-center',
      stopEvent: false
    })

    this.popupR = new Overlay({
      element: this.divpopR,
      autoPan: {
        animation: {
          duration: 250,
        },
      }
    })

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
    });

    this.map.addOverlay(this.popup);
    this.map.addOverlay(this.popupR);

    this.map.on('click', (e) => {
      console.log(e);

      const feacture = this.map.forEachFeatureAtPixel(e.pixel, (feacture) => {
        return feacture;
      });
      if (feacture) {
        this.popup.setPosition(e.coordinate);
        this.divpop.innerHTML = ` <button type="button" class="btn-close" data-bs-dismiss=""></button> ${e.coordinate}`;
      }
    });

    this.map.getViewport().addEventListener('contextmenu', (evt) => {
      evt.preventDefault();
      console.log(this.map.getEventCoordinate(evt));
      const feacture = this.map.forEachFeatureAtPixel(this.map.getEventPixel(evt), (feacture) => {
        return feacture;
      });
      if (feacture) {
        this.popupR.setPosition(this.map.getEventCoordinate(evt));
        this.divpopR.innerHTML = feacture.get('name');
        console.log(feacture.get('name'));

      }

    });

    // cambia el cursor al estar sobre un marcker
    this.map.on('pointermove', (e) => {
      if (this.map.hasFeatureAtPixel(e.pixel)) {
        this.map.getViewport().style.cursor = 'pointer';
      } else {
        this.map.getViewport().style.cursor = 'inherit';
      }
    });

    // Close the popup when the map is moved
    this.map.on('movestart', () => {
      this.popupR.setPosition(undefined);
      this.popup.setPosition(undefined);
    });

  }

  evento(e: MouseEvent) {
    console.log(e.button);
    if (e.button == 2) {
      this.clickright();
    }

  }

  //establecer tamaño del div
  setSize() {
    if (this.divMap) {
      const style = this.divMap.nativeElement.style;
      style.width = this.width.toString() || DEFAULT_WIDTH;
      style.height = this.height.toString() || DEFAULT_HEIGHT;

    }
  }

  //Agregar marcadores
  setMaker(vector: VectorLayer<any>) {
    this.map.addLayer(vector);
  }

  clickright() {

  }


}
