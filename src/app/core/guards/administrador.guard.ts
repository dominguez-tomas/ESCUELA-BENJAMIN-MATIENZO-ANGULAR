import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectAuthUser } from 'src/app/store/auth/auth.selector';

export const administradorGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);
  return store.select(selectAuthUser).pipe(map((usuarios) => {
      if (usuarios?.role !== 'ADMINISTRADOR') {
       alert('SOLO LOS ADMINISTRADORES PUEDEN ACCEDER A ESTA PESTAÑA.'); return router.createUrlTree(['/dashboard/home']);
      } else {
        return true;
      }
    })
  );
};
