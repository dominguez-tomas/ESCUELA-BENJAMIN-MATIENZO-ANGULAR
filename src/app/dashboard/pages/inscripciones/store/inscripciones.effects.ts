import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, forkJoin, of } from 'rxjs';
import { InscripcionesActions } from './inscripciones.actions';
import { HttpClient } from '@angular/common/http';
import { CreateInscripcionessPayload, inscripciones } from '../models';
import { environment } from 'src/environments/environment.local';
import { curso } from '../../courses/models';
import { User } from '../../user/models';


@Injectable()
export class InscripcionesEffects {

  loadInscripcioness$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscripcionesActions.loadInscripcioness),
      concatMap(() =>
        this.getInscripciones().pipe(
          map(data => InscripcionesActions.loadInscripcionessSuccess({ data })),
          catchError(error => of(InscripcionesActions.loadInscripcionessFailure({ error }))))
      )
    );
  });

  createInscripcion$ = createEffect(() =>this.actions$.pipe(
    ofType(InscripcionesActions.createInscripcioness),
    concatMap((action) => {
      return this.createInscripcioness(action.payload).pipe(map((data) => InscripcionesActions.loadInscripcioness()),catchError((error) =>
          of(InscripcionesActions.loadInscripcionessFailure({ error }))
        ));
      })));

  loadInscripcionesDialogOptions$ = createEffect(() => this.actions$.pipe(
    ofType(InscripcionesActions.loadInscripcionessDialogOptions),
    concatMap(() => this.getInscripcionesDialogOptions().pipe(
    map((resp) => InscripcionesActions.loadInscripcionessDialogOptionsSuccess(resp)
    ),
    catchError((err) => of(InscripcionesActions.loadInscripcionessDialogOptionsFailure({error: err,}))
    )
    ))
  ));

  constructor(private actions$: Actions, private httpClient: HttpClient) {}
  createInscripcioness(payload: CreateInscripcionessPayload): Observable<inscripciones> {
    return this.httpClient.post<inscripciones>(
      `${environment.baseUrl}/inscripciones`,payload);
  }
  getInscripcionesDialogOptions(): Observable<{
    cursos: curso[]; alumno: User[];
  }> {
    return forkJoin([this.httpClient.get<curso[]>(`${environment.baseUrl}/cursos`),
    this.httpClient.get<User[]>(`${environment.baseUrl}/usuarios?role=alumno`)])
    .pipe(
      map(([cursos, alumno]) => {
        return{cursos, alumno}
      })
    )
  }

  getInscripciones(): Observable<inscripciones[]>{
    return this.httpClient.get<inscripciones[]>(`${environment.baseUrl}/inscripciones?_expand=curso&_expand=usuario`);
  }
  
}