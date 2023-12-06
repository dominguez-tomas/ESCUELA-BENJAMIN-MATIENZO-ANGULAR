export type userRole$ = 'ADMINISTRADOR' | 'STAFF' | 'alumno';
export interface User {
    id: number;
    name: string;
    apellido: string;
    email: string;
    contraseña: string;
    token: string;
    role: userRole$;
  }