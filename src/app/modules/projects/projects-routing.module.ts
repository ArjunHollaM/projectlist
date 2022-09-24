import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMembersComponent } from './components/add-members/add-members.component';
import { LoadProjectsComponent } from './components/load-projects/load-projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

const routes: Routes = [
  {
    path: "" , component: LoadProjectsComponent
  },
  {
    path: "details", component: ProjectDetailsComponent
  },
  {
    path: "add-members",component: AddMembersComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
