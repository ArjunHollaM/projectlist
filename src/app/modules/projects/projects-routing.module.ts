import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadProjectsComponent } from './components/load-projects/load-projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

const routes: Routes = [
  {
    path: "" , component: LoadProjectsComponent
  },
  {
    path: "details", component: ProjectDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
