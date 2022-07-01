import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/components/home/home.component';
//import {ProjectsComponent} from '../app/components/projects/projects.component';
import {ProfileComponent} from '../app/components/profile/profile.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';



const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/landing',
    pathMatch: 'full' 
  },
  { 
    path: 'landing', 
    component: LandingComponent 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'signup', 
    component: SignUpComponent 
  },
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'projects',
    loadChildren: () => import('./modules/projects/projects.module').then((m) => m.ProjectsModule) 
  },
  { 
    path: 'profile', 
    component: ProfileComponent 
  },
  { 
    path: '**', 
    redirectTo: '/home',
    pathMatch: 'full' 
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
