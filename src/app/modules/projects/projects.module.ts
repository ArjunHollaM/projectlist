import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ProjectsRoutingModule } from './projects-routing.module';
import { LoadProjectsComponent } from './components/load-projects/load-projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { AddMembersComponent } from './components/add-members/add-members.component';

@NgModule({
  declarations: [LoadProjectsComponent, ProjectDetailsComponent, AddMembersComponent],
  imports: [CommonModule, ProjectsRoutingModule,FormsModule,AngularFireStorageModule],
  exports: [LoadProjectsComponent, ProjectDetailsComponent],
})
export class ProjectsModule {}
