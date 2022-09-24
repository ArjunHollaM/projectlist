import { Component, Injectable, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
//import { projects } from '../../example-projects';
import { Project } from '../../Project';
import {Location} from '@angular/common';
import { ProjectdataService } from '../../../../services/projectdata.service'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load-projects',
  templateUrl: './load-projects.component.html',
  styleUrls: ['./load-projects.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LoadProjectsComponent implements OnInit {

  projects$: Observable<Project[]>;
  static updateFlag: boolean;
  static projectToEdit: Project

  constructor(private location: Location, private projectService: ProjectdataService,private router: Router) { }

  ngOnInit(): void {
    // this.projectService.getProjects().subscribe(res =>{
    //   this.projects=res
    // })
    this.projects$ = this.projectService.getProjects();
  }

  goBack() {
    this.location.back();
  }

  handleUpdate(event: any, project: Project){
    LoadProjectsComponent.updateFlag = true;
    LoadProjectsComponent.projectToEdit = project;
    this.router.navigate(['/projects/details'])
  }

  handleDelete(event: any, project: Project){
    if(confirm("Are you sure you want to delete this project? This action is permanent!"))
    {
      this.projectService.deleteProject(project)
      .then(()=>alert(`Project '${project.name}' has been deleated`))
      .catch(()=>alert('Failed!'));
    }
  }

}
