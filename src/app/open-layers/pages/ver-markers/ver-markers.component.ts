import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../interfaces/marcador.interface';
import { OpenLayerService } from '../../services/open-layer.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-ver-markers',
  templateUrl: './ver-markers.component.html',
  styles: [
  ]
})
export class VerMarkersComponent implements OnInit {

  mostrarSugerencias: boolean = false;
  limpiar: boolean = false;
  termino: string = "";
  marcadores: Marcador[] = [];
  marcadoresSugeridos: Marcador[] = [];
  sinSugerencias: boolean = false;
  pintarMarcador: boolean = false;
  consulta: boolean = false;
 
 
  get historial() : Marcador[] {
    return [...this.marcadores];
  }
  
  constructor( private openLayerService: OpenLayerService) { }

  ngOnInit(): void {
    
  }

  sugerencias( busqueda: string | null) {
    
    if (busqueda == null) {
      this.termino == "";
    }else{
      this.termino = busqueda;
      this.consulta = true;
      this.openLayerService.getSugerencias( busqueda )
      .pipe( 
        tap( ( marcadores ) => {
          if ( this.termino.length == 0 ) {
            this.mostrarSugerencias = false;
            this.consulta = false;
            return;
          }
          if (marcadores.length == 0 ) {
            this.mostrarSugerencias = false;
          }else{
            this.mostrarSugerencias = true;
          }
        })
      )
      .subscribe( ( marcadores ) => {
        //this.marcadores = marcadores;
        this.marcadoresSugeridos = marcadores.slice(0,5);
      })
      this.limpiar = false;
    }
    
  }

  mostrarMarcador( termino: number) {
    this.limpiar = true;
    this.mostrarSugerencias = false;
    this.consulta = false;
    this.openLayerService.getMarcador( termino )
    .pipe(
      tap( ( marcador ) => {
        console.log(this.marcadores);
      })
    )
    .subscribe( ( marcador ) => {
      this.marcadores.push( marcador );
      this.pintarMarcador = true;
     
    })
  }

}
