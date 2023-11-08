import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', 
        component: DashboardComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent,
          },

          {
            path: 'courses',
            loadChildren: () =>
              import('./pages/courses/courses.module').then(
                (m) => m.CoursesModule
              ),
          },

          {
            path: 'user',
            loadChildren: () =>
              import('./pages/user/user.module').then((m) => m.UserModule),
          },
          {
            path: '**',
            redirectTo: 'home',
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}