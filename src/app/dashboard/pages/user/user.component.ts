import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { User } from './models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userName = '';

  usuarios: User[] = [
    { 
      id: 4827405591279,
      nombre: 'Hugo',
      email: 'Hugo1986@gmail.com'
    }
  ]

  constructor(private matDialog: MatDialog) { }

  openUserDialog(): void {
    this.matDialog.open(UserDialogComponent).afterClosed().subscribe({
      next: (v) => {
        if (!!v) {
          this.usuarios = [
            ...this.usuarios,
            {
              ...v,
              id: new Date().getTime(),
            },
          ]
        }
      },
    });
  }

  onEditUser(user: User): void {
    this.matDialog.open(UserDialogComponent, {
      data: user,
    }).afterClosed().subscribe({
      next: (v) => {
        if(!!v) {
          this.usuarios = this.usuarios.map((u) =>
          u.id === user.id ? {...u, ...v } : u
          );
        }
      }
    })
  }

  onDeleteUser(userid: number): void {
    if(confirm('Estas seguro de ELIMINAR este usuario?')){
      this.usuarios = this.usuarios.filter((u) => u.id !== userid);
    }
  }
}

