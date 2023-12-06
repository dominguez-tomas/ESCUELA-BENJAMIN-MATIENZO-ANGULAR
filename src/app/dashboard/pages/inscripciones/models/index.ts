import { curso } from "../../courses/models";
import { User } from "../../user/models";

export interface inscripciones {
    id: number;
    cursoId: number;
    usuarioId: number;
    user?: User;
    curso?: curso;
}
export interface CreateinscripcionessPayload {
    cursoId: number | null;
    usuarioId: number | null;
  }