import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/components/home/home.component';
import {ProjectsComponent} from '../app/components/projects/projects.component';
import {ProfileComponent} from '../app/components/profile/profile.component';



const routes: Routes = [
  { path: './components/home', component: HomeComponent },
  { path: './components/projects', component: ProjectsComponent },
  { path: './components/profile', component: ProfileComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
