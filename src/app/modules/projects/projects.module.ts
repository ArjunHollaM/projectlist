import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { LoadProjectsComponent } from './components/load-projects/load-projects.component';

@NgModule({
  declarations: [LoadProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule],
  exports: [LoadProjectsComponent],
})
export class ProjectsModule {}
