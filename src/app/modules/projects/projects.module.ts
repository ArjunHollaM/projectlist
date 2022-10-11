import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ProjectsRoutingModule } from './projects-routing.module';
import { LoadProjectsComponent } from './components/load-projects/load-projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { AddMembersComponent } from './components/add-members/add-members.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {matFormFieldAnimations, MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [LoadProjectsComponent, ProjectDetailsComponent, AddMembersComponent],
  imports: [CommonModule, ProjectsRoutingModule,FormsModule,AngularFireStorageModule,MatTableModule,MatButtonModule,MatIconModule,MatInputModule,MatFormFieldModule,MatSelectModule],
  exports: [LoadProjectsComponent, ProjectDetailsComponent],
})
export class ProjectsModule {}
