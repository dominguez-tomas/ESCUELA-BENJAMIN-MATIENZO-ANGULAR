import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CreateInscripcionessPayload, inscripciones } from '../models';
import { curso } from '../../courses/models';
import { User } from '../../user/models';

export const InscripcionesActions = createActionGroup({
  source: 'Inscripciones',
  events: {
    'Load Inscripcioness By Id': props<{ id: number }>(),
    'Load Inscripcioness': emptyProps(),
    'Load Inscripcioness Success': props<{ data: inscripciones[] }>(),
    'Load Inscripcioness Failure': props<{ error: unknown }>(),
    'Load Inscripcioness Dialog Options': emptyProps(),
    'Load Inscripcioness Dialog Options Success': props<{cursos: curso[];alumno: User[];}>(),
    'Load Inscripcioness Dialog Options Failure': props<{ error: unknown }>(),
    'Create Inscripcioness': props<{ payload: CreateInscripcionessPayload }>(),
    'Create Inscripcioness Failure': props<{ error: unknown }>(),
  },
});
