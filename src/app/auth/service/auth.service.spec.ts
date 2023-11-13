import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';
import { User } from 'src/app/dashboard/pages/user/models';
import { environment } from 'src/environments/environment.local';
import { MockProvider } from 'ng-mocks';
import { Router } from '@angular/router';

describe('AuthService', () => {
  let authService: AuthService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [MockProvider(Router)],
    });

    authService = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('se debe definir AuthService', () => {
    expect(authService).toBeTruthy();
  });

  it('cuando se logea tiene que establecer un usuario ya cargado()', () => {
    const USER_MOCK: User = {
      id: 1,
      email: 'userTests@mail.com',
      contraseña: '123',
      name: 'userTests',
      role: 'BACKEND',
      token: 'BACK3ND666',
    };

    authService.login({
      email: USER_MOCK.email,
      contraseña: USER_MOCK.contraseña,
    });

    httpController
      .expectOne({
        method: 'GET',
        url: `${environment.baseUrl}/usuarios?email=${USER_MOCK.email}&contraseña=${USER_MOCK.contraseña}`,
      })
      .flush([USER_MOCK]);

    authService.authUser$.subscribe({
      next: (authUser) => {
        expect(authUser).toBeTruthy();
        expect(authUser).toEqual(USER_MOCK);
      },
    });
  });
});