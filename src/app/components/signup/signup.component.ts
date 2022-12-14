import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  usuario = '';
  password = '';

  signUp() {
    this.auth.signup(this.usuario, this.password);
  }

  login() {
    this.router.navigate(['']);
  }
  ngOnInit(): void {}
}
