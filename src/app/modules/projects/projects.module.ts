import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectsRoutingModule } from './projects-routing.module';
import { LoadProjectsComponent } from './components/load-projects/load-projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

@NgModule({
  declarations: [LoadProjectsComponent, ProjectDetailsComponent],
  imports: [CommonModule, ProjectsRoutingModule,FormsModule],
  exports: [LoadProjectsComponent, ProjectDetailsComponent],
})
export class ProjectsModule {}
