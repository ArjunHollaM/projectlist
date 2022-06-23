import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadProjectsComponent } from './components/load-projects/load-projects.component';

const routes: Routes = [
  {
    path: "" , component: LoadProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
