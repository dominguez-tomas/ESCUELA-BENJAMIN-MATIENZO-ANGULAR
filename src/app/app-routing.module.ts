import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './dashboard/pages/user/user.component';
import { HomeComponent } from './dashboard/pages/home/home/home.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';
import { dashboardGuard } from './core/guards/dashboard.guard';

const routes: Routes = [
      {
        path: 'dashboard',
        canActivate: [dashboardGuard],
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: 'inscripciones',
        loadChildren: () => import('./dashboard/pages/inscripciones/inscripciones.module').then((m) => m.InscripcionesModule),
      },
      {
        path: '**',
        redirectTo: 'auth/login',
      },
    
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
