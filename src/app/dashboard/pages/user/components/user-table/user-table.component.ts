import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styles: [
  ]
})
export class UserTableComponent {
  @Input()
  dataSource: User[] = [];

  @Output()
  deleteUser = new EventEmitter<number>()

  @Output()
  editUser = new EventEmitter<User>()
  
  displayedColumns = [ 'id', 'nombre', 'email', 'actions']
}
