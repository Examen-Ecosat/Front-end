import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  usuario = '';
  password = '';

  login() {
    console.log(this.usuario, this.password);
    this.auth.login(this.usuario, this.password);
  }

  signup() {
    this.router.navigate(['sign-up']);
  }

  ngOnInit(): void {}
}
