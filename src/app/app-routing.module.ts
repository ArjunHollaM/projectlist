import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeComponent } from './components/code/code.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PhoneLoginComponent } from './components/phone-login/phone-login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'phone',
    component: PhoneLoginComponent,
  },
  {
    path: 'code',
    component: CodeComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'projects',
    loadChildren: () => import('./modules/projects/projects.module').then((m) => m.ProjectsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'projects/details',
    loadChildren: () => import('./modules/projects/projects.module').then((m) => m.ProjectsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
