import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CreateinscripcionessPayload, inscripciones } from '../models';
import { curso } from '../../courses/models';
import { User } from '../../user/models';

export const InscripcionesActions = createActionGroup({
  source: 'Inscripciones',
  events: {
    'Load inscripcioness By Id': props<{ id: number }>(),
    'Load inscripcioness': emptyProps(),
    'Load inscripcioness Success': props<{ data: inscripciones[] }>(),
    'Load inscripcioness Failure': props<{ error: unknown }>(),
    'Load inscripcioness Dialog Options': emptyProps(),
    'Load inscripcioness Dialog Options Success': props<{cursos: curso[];alumno: User[];}>(),
    'Load inscripcioness Dialog Options Failure': props<{ error: unknown }>(),
    'Create ': props<{ payload: CreateinscripcionessPayload }>(),
    'Create  Failure': props<{ error: unknown }>(),
  },
});
