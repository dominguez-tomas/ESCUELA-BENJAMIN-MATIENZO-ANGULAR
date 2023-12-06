import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscripcionesActions } from '../../store/inscripciones.actions';
import { curso } from '../../../courses/models';
import { User } from '../../../user/models';
import { Observable, take } from 'rxjs';
import { selectAlumnoOptions, selectCursoOptions } from '../../store/inscripciones.selectors';
import { MatDialogRef } from '@angular/material/dialog';
import { Actions, ofType } from '@ngrx/effects';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inscripciones-dialog',
  templateUrl: './inscripciones-dialog.component.html',
  styleUrls: ['./inscripciones-dialog.component.scss']
})
export class InscripcionesDialogComponent {
  export class inscripcionesDialogComponent {
    userIdControl = new FormControl<number | null>(null);
    courseIdControl = new FormControl<number | null>(null);
  
    enrollmentForm = new FormGroup({
      courseId: this.courseIdControl,
      userId: this.userIdControl,
    });
  

  cursoOptions$: Observable<curso[]>;
  alumnoOptions$: Observable<User[]>;
    action$: any;
    matDialogRef: any;
    inscripcionessForm: any;

  constructor(private store: Store) {
    this.store.dispatch(InscripcionesActions.loadInscripcionessDialogOptions());
    this.cursoOptions$ = this.store.select(selectCursoOptions)
    this.alumnoOptions$ = this.store.select(selectAlumnoOptions);
  
    constructor(private store: Store,private Actions: Actions,private MatDialogRef: MatDialogRef<InscripcionesDialogComponent>) 
  {
    this.store.dispatch(InscripcionesActions.loadInscripcionessDialogOptions());
    this.cursoOptions$ = this.store.select(selectCursoOptions);
    this.alumnoOptions$ = this.store.select(selectAlumnoOptions);
    this.action$.pipe(ofType(InscripcionesActions.loadInscripcioness), take(1)).subscribe({next: () => this.matDialogRef.close(),
      });

    onSubmit(): void {this.store.dispatch(
      InscripcionesActions.loadInscripcioness({payload: this.inscripcionessForm.getRawValue(),})
    );
  }
}
}}}