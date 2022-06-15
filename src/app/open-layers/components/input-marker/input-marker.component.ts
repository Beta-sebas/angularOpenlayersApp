import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';


@Component({
  selector: 'app-input-marker',
  templateUrl: './input-marker.component.html',
  styles: [
  ]
})
export class InputMarkerComponent implements OnInit {

  @Input() limpiar: boolean = false;
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();


  formulario: FormGroup = this.fb.group({
    marcador: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //Obtener valor del input
    this.formulario.get('marcador')?.valueChanges
      .pipe(
        debounceTime(400)
        //tap ( (texto) => console.log(texto)
      )//)
      .subscribe((busqueda) => {
        this.onDebounce.emit(busqueda)
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['limpiar'].currentValue == false) {
      return;
    } else {
      this.formulario.reset();
    }

  }


}
