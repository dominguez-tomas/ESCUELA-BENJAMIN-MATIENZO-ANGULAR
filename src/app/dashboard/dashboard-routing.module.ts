import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { DashboardComponent } from './dashboard.component';
import { administradorGuard } from '../core/guards/administrador.guard';

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
            canActivate: [administradorGuard],
            loadChildren: () =>
              import('./pages/user/user.module').then((m) => m.UserModule),
          },
          {
            path: 'inscripciones',
            loadChildren: () => import('./pages/inscripciones/inscripciones.module').then((m) => m.InscripcionesModule),
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