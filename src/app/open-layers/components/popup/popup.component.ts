import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Coordinate } from 'ol/coordinate';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styles: [
  ]
})
export class PopupComponent implements OnInit, OnChanges {

  /* @Input() Lat!: number;
  @Input() Lon!: number; */
  @Input() coordenadas!: any;

  Lat!: number ;
  Lon!: number ; 

  constructor() { }

  ngOnInit(): void {
 
  }

  ngOnChanges(changes: SimpleChanges): void {
     
    if (changes['coordenadas'].currentValue == undefined) {
      this.Lat=0;
      this.Lon=0;
    } else {
      this.Lon = changes['coordenadas'].currentValue[0];
      this.Lat = changes['coordenadas'].currentValue[1];
    }
    
  }

}
