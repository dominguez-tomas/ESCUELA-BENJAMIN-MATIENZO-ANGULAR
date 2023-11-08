import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from 'src/app/dashboard/pages/user/models';

import { environment } from 'src/environments/environment.local';
import { LoginPayload } from '../models';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root', 
})
export class AuthService {
    private _authUser$ = new BehaviorSubject<User | null>(null);

    public authUser$ = this._authUser$.asObservable();


    constructor(private httpClient: HttpClient, private router: Router) { }

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
                        this._authUser$.next(authUser);
                        localStorage.setItem('token', authUser.token);
                        this.router.navigate(['/dashboard/home']);
                    }
                },
                error: (err) => {
                    alert('Error de conexion');
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
                        this._authUser$.next(authUser);
                        localStorage.setItem('token', authUser.token);
                        return true;
                    }
                })
            );
    }

    logout(): void {
        this._authUser$.next(null);
        localStorage.removeItem('token');
        this.router.navigate(['/auth/login']);
    }
}
