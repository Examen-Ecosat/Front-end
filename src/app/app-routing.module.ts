import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LoginComponent },
      {
        path: 'placeholder',
        component: PlaceholderComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'sign-up',
        component: SignupComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
