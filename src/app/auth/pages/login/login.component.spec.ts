import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';

describe('LoginComponent', () => {
  let loginComponent: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, SharedModule],
    });
    const fixture = TestBed.createComponent(LoginComponent);
    loginComponent = fixture.componentInstance;
  });

  it('tiene que crear un LOGIN COMPONENT', () => {
    expect(loginComponent).toBeTruthy();
  });

  it('debe marcar todo los campos del formulario como "TOUCHED" si estos no cumplen con lo pedido', () => {
    loginComponent.loginForm.patchValue({
      email: 'marcelo123@hotmail.com',
      contraseña: '',
    });
    loginComponent.login();
    expect(loginComponent.emailControl.touched).toBeTrue();
    expect(loginComponent.contraseñaControl.touched).toBeTrue();
  });

  it('debe llamar el metodo LOGIN del AuthService, si el formulario es VALIDO', () => {
    loginComponent.loginForm.patchValue({
      email: 'test66@gmail.com',
      contraseña: '123',
    });

    const spyOnAuthServiceLogin = spyOn(
      (loginComponent as any).authService,
      'login'
    );

    loginComponent.login();

    expect(spyOnAuthServiceLogin).toHaveBeenCalled();
  });
});