import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrls: ['./courses-dialog.component.scss']
})
export class CoursesDialogComponent {

  nombreControl = new FormControl();
  fechaDeInicioControl = new FormControl<string|Date>('', Validators.required);
  fechaDeFinControl = new FormControl<string|Date>('', Validators.required);

  coursesForm = new FormGroup({
    nombre: this.nombreControl,
    fechaDeInicio: this.fechaDeInicioControl,
    fechaDeFin: this.fechaDeFinControl,
  });
curso: any;

  constructor(
    private matDialogRef: MatDialogRef<CoursesDialogComponent>, 
    private coursesService: CoursesService,
    @Inject(MAT_DIALOG_DATA) private cursoId?: number
    ) {
    if (cursoId) {
      this.coursesService.getCursoById$(cursoId).subscribe({
        next: (c) => {
          if (c) {
            this.coursesForm.patchValue(c);
          }
        },
      });
    }
  }

  public get isEditing(): boolean{
    return !!this.cursoId;}
  

  onSubmit(): void {
    if (this.coursesForm.invalid){
      return this.coursesForm.markAllAsTouched();
    } else{
      //logica

      this.matDialogRef.close(this.coursesForm.value);
    }
  }
}
