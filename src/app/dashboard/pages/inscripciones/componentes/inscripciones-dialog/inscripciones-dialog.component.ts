import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscripcionesActions } from '../../store/inscripciones.actions';
import { curso } from '../../../courses/models';
import { User } from '../../../user/models';
import { Observable, take } from 'rxjs';
import { selectAlumnoOptions, selectCursoOptions } from '../../store/inscripciones.selectors';
import { MatDialogRef } from '@angular/material/dialog';
import { Actions, ofType } from '@ngrx/effects';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inscripciones-dialog',
  templateUrl: './inscripciones-dialog.component.html',
  styleUrls: ['./inscripciones-dialog.component.scss']
})
export class InscripcionesDialogComponent {
    usuarioIdControl = new FormControl<number | null>(null);
    cursoIdControl = new FormControl<number | null>(null);
  
    inscripcionesForm = new FormGroup({
      cursoId: this.cursoIdControl,
      usuarioId: this.usuarioIdControl,
    });
  
    cursoOptions$: Observable<curso[]>;
    alumnoOptions$: Observable<User[]>;

  constructor(private store: Store,private action$: Actions,private MatDialogRef: MatDialogRef<InscripcionesDialogComponent>) 
  {
    this.store.dispatch(InscripcionesActions.loadInscripcionessDialogOptions());
    this.cursoOptions$ = this.store.select(selectCursoOptions);
    this.alumnoOptions$ = this.store.select(selectAlumnoOptions);
    this.action$.pipe(ofType(InscripcionesActions.loadInscripcioness), take(1)).subscribe({next: () => this.MatDialogRef.close(),
      });
    }

    onSubmit(): void {this.store.dispatch(
      InscripcionesActions.createInscripcioness({payload: this.inscripcionesForm.getRawValue(),})
    );
  }
}
