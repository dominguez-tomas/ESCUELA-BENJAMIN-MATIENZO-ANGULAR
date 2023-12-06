import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscripciones from './inscripciones.reducer';

export const selectInscripcionesState = createFeatureSelector<fromInscripciones.State>(
  fromInscripciones.inscripcionesFeatureKey
);

export const selectInscripciones = createSelector(
  selectInscripcionesState, (state) => state.inscripciones
);
export const selectInscripcionesIsLoading = createSelector(selectInscripcionesState,(state) => state.isLoading);

export const selectCursoOptions = createSelector(selectInscripcionesState,(state) => state.cursoOptions);

export const selectAlumnoOptions = createSelector(selectInscripcionesState,(state) => state.alumnoOptions);
