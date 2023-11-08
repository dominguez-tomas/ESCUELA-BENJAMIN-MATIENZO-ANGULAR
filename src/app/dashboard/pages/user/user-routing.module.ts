import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: UserComponent,
      },
    ]),
  ],

  exports: [RouterModule],
})
export class UserRoutingModule {}