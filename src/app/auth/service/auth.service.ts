import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from 'src/app/dashboard/pages/user/models';

import { environment } from 'src/environments/environment.local';
import { LoginPayload } from '../models';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { AuthActions } from "src/app/store/auth/auth.acciones";
import { selectAuthUser } from "src/app/store/auth/auth.selector";

@Injectable({
    providedIn: 'root', 
})
export class AuthService {

    public authUser$ = this.store.select(selectAuthUser);


    constructor(private httpClient: HttpClient, private router: Router, private store: Store) { }

    private handleAuthUser(authUser: User): void {
        this.store.dispatch(AuthActions.setAuthUser({ data: authUser }));
        localStorage.setItem('token', authUser.token);
    }


    login(payload: LoginPayload): void {
        this.httpClient
            .get<User[]>(
                `${environment.baseUrl}/usuarios?email=${payload.email}&contraseña=${payload.contraseña}`,
            )
            .subscribe({
                next: (response) => {
                    if (!response.length) {
                        alert('Usuario o contrasena invalidos');
                    } else {
                        const authUser = response[0];
                        this.handleAuthUser(authUser);
                        this.router.navigate(['/dashboard/home']);
                    }
                },
                error: (err) => {
                    alert('No fue posible conectarse');
                },
            });
    }

    verifyToken(): Observable<boolean> {
        return this.httpClient
            .get<User[]>(
                `${environment.baseUrl}/usuarios?token=${localStorage.getItem('token')}`
            )
            .pipe(
                map((usuarios) => {
                    if (!usuarios.length) {
                        return false;
                    } else {
                        const authUser = usuarios[0];
                        this.handleAuthUser(authUser);
                        return true;
                    }
                })
            );
    }

    logout(): void {
        this.store.dispatch(AuthActions.resetState());
        localStorage.removeItem('token');
        this.router.navigate(['/auth/login']);
    }
}
