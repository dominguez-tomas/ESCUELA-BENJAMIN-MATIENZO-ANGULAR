import { Component, EventEmitter, Input, Output } from '@angular/core';
import { curso } from '../../models';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})
export class CoursesTableComponent {

  @Input()
  dataSource: curso[] = [];

  @Output()
  deleteCourse = new EventEmitter();

  @Output()
  editCourse = new EventEmitter();

  displayedColumns = ['id', 'nombre', 'fechaDeInicio', 'fechaDeFin', 'actions']
}
