import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'details-page', component: DetailsPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
