import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faSignOut,
  faBars,
  faCaretDown,
  faSearch,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
})
export class PlaceholderComponent implements OnInit {
  faSignOut = faSignOut;
  faBars = faBars;
  faCaretDown = faCaretDown;
  faSearch = faSearch;
  faCircleExclamation = faCircleExclamation;

  data = true;

  estado = '';

  constructor(private router: Router, private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }

  ngOnInit(): void {}
}
