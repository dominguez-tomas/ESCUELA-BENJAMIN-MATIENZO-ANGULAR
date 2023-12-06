import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, userRole$ } from '../../models';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { selectAuthUser } from 'src/app/store/auth/auth.selector';


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

  userRole$: Observable< userRole$ | undefined>;

  constructor(private router: Router, private store: Store) {
    this.userRole$ = this.store.select(selectAuthUser).pipe(map((u) => u?.role));
  }

}
