import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    UserComponent,
    UserDialogComponent,
    UserTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ],
  exports:[UserComponent]
})
export class UserModule { }
