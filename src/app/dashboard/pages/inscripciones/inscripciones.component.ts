import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscripcionesActions } from './store/inscripciones.actions';
import { MatDialog } from '@angular/material/dialog';
import { InscripcionesDialogComponent } from './componentes/inscripciones-dialog/inscripciones-dialog.component';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent {
constructor(private store: Store, private dialog: MatDialog) {
  this.store.dispatch(InscripcionesActions.loadInscripcioness());
}

addInscripciones(): void {
 this.dialog.open(InscripcionesDialogComponent)
}
}