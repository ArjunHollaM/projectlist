import { Component, OnInit } from '@angular/core';
//import { projects } from '../../example-projects';
import { Project } from '../../Project';
import {Location} from '@angular/common';
import { ProjectdataService } from '../../../../services/projectdata.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-load-projects',
  templateUrl: './load-projects.component.html',
  styleUrls: ['./load-projects.component.css']
})
export class LoadProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private location: Location, private projectService: ProjectdataService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(res =>{
      this.projects=res
    })
  }

  goBack() {
    this.location.back();
  }

  // handleDelete(event, project){
  //   this.projectService.deleteProject(project);
  // }

}
