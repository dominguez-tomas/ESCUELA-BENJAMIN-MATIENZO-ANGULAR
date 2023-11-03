import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';
import { curso } from './models';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  
  cursos$: Observable<curso[]>;

  constructor(private coursesService: CoursesService, private matDialog: MatDialog) {
    this.cursos$ = this.coursesService.getCursos$();
  }

  addCourse(): void{
    this.matDialog.open(CoursesDialogComponent).afterClosed().subscribe({
      next: (resultado) => {
        if (resultado) {
          this.cursos$ = this.coursesService.createCourse({
            id: new Date().getTime(),
            nombre: resultado.nombre,
            fechaDeFin: resultado.fechaDeFin,
            fechaDeInicio: resultado.fechaDeInicio,
          })
        }
      }
    });
  }
  onDeletecourse(cursoId: number): void {
    if(confirm('Estas seguro de ELIMINAR este curso?')){
    this.cursos$ = this.coursesService.deleteCourse$(cursoId);
  }
}
  
  onEditCourse(cursoId: number): void {
    this.matDialog.open(CoursesDialogComponent, {
      data: cursoId,
    }).afterClosed().subscribe({
      next: (result) => {
        if (!!result) {
          this.cursos$ = this.coursesService.editCourse(cursoId,result);
        }
      }
    })
  }
}
