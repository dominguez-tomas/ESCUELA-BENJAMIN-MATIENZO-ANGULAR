import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserComponent,
    UserDialogComponent,
    UserTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[UserComponent]
})
export class UserModule { }
