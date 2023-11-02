import { Injectable } from "@angular/core";
import { curso } from "./models";
import { Observable, of } from "rxjs";



@Injectable({providedIn: 'root'})
export class CoursesService {

    cursos: curso[] = [
        {
            id: 8969812590163,
            nombre:'MECANICA',
            fechaDeInicio: new Date(),
            fechaDeFin: new Date(),
        },
        {
            id: 6814998859936,
            nombre:'ROBOTICA',
            fechaDeInicio: new Date(),
            fechaDeFin: new Date(),
        },
    ];

    getCursos$(): Observable<curso[]> {
        return of(this.cursos);
    }

    createCourse(payload: curso): Observable<curso[]> {
        this.cursos.push(payload);
        return of([...this.cursos]);
    }

    editCourse(id: number, payload: curso): Observable<curso[]> {
        this.cursos.push(payload);
        return of(this.cursos.map((c)=> c.id === id ? {...c, ...payload} : c));
    }

    deleteCourse$(id: number): Observable<curso[]> {
        this.cursos = this.cursos.filter((c) => c.id !== id);
        return of(this.cursos);
    }

    getCursoById$(id: number): Observable<curso | undefined> {
        return of(this.cursos.find((c) => c.id === id));
    }

}