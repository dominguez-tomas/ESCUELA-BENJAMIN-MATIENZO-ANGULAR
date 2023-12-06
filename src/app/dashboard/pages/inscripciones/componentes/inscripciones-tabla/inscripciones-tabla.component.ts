import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { inscripciones } from '../../models';
import { Store } from '@ngrx/store';
import { selectInscripciones } from '../../store/inscripciones.selectors';

@Component({
  selector: 'app-inscripciones-tabla',
  templateUrl: './inscripciones-tabla.component.html',
  styleUrls: ['./inscripciones-tabla.component.scss']
})
export class InscripcionesTablaComponent {
  displayedColumns = ['id', 'curso', 'alumno', 'acciones']

  inscripciones$: Observable<inscripciones[]>;

  constructor(private store: Store) {
    this.inscripciones$ = this.store.select(selectInscripciones)
  }
}
