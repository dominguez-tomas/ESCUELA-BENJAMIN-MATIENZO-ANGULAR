import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionesActions } from './inscripciones.actions';
import { inscripciones } from '../models';
import { curso } from '../../courses/models';
import { User } from '../../user/models';

export const inscripcionesFeatureKey = 'inscripciones';

export interface State {
isLoading: boolean;
isLoadingDialogOptions: boolean;
cursoOptions: curso[];
alumnoOptions: User[];
inscripciones: inscripciones[];
error: unknown;
}

export const initialState: State = {
  isLoading: false,
  isLoadingDialogOptions: false,
  inscripciones: [],
  cursoOptions: [],
  alumnoOptions: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(InscripcionesActions.loadInscripcioness, state => ({...state, isLoading: true})),
  on(InscripcionesActions.loadInscripcionessSuccess, (state, {data}) => ({...state, isLoading: false, inscripciones: data})),
  on(InscripcionesActions.loadInscripcionessFailure, (state, {error}) => ({...state, isLoading: false, error})),
  on(InscripcionesActions.loadInscripcionessDialogOptions, (state) => { return {...state, isLoadingDialogOptions: true,};}),
  on(InscripcionesActions.loadInscripcionessDialogOptionsSuccess, (state, action) => ({...state, cursoOptions: action.cursos, alumnoOptions: action.alumno, isLoadingDialogOptions: false,})),
  on(InscripcionesActions.loadInscripcionessDialogOptionsFailure, (state, action) => ({...state, error: action.error, isLoadingDialogOptions: false,})),
  on(InscripcionesActions.loadInscripcionessDialogOptionsFailure, (state, action) => ({...state, error: action.error, isLoadingDialogOptions: false,}))
);
  
export const inscripcionesFeature = createFeature({
  name: inscripcionesFeatureKey,
  reducer,
});

