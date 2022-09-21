import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  login(usuario: string, contraseña: string) {
    this.http
      .post(
        'http://localhost:4000/login',
        {
          usuario: usuario,
          contraseña: contraseña,
        },
        { withCredentials: true }
      )
      .subscribe(
        (res: any) => {
          console.log({ 'This is the response': res });
          this.cookie.set('session', res.usuario, { expires: 3 / 24 });
          this.router.navigate(['placeholder']);
          this.toastr.success(res.mensaje);
        },
        (err: Error) => {
          if (err) return this.toastr.error('Usuario o contraseña incorrecta');
          return 0;
        }
      );
  }

  logout() {
    this.cookie.delete('session');
    this.http
      .get('http://localhost:4000/logout', { withCredentials: true })
      .subscribe((res: any) => {
        this.toastr.success(res);
        this.router.navigate(['']);
      });
  }

  signup(usuario: string, contraseña: string) {
    this.http
      .post(
        'http://localhost:4000/signup',
        {
          usuario: usuario,
          contraseña: contraseña,
        },
        { withCredentials: true }
      )
      .subscribe(
        (res: any) => {
          this.toastr.success(res.mensaje);
          this.cookie.set('session', usuario, { expires: 3 / 24 });
          this.router.navigate(['placeholder']);
        },
        (err: Error) => {
          if (err) return this.toastr.error('No se pudo crear al usuario');
          return 0;
        }
      );
  }

  public get session(): boolean {
    if (this.cookie.get('session')) return true;

    return false;
  }
}
