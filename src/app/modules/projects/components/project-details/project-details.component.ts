import { Component, OnInit } from '@angular/core';
import { ProjectdataService } from 'src/app/services/projectdata.service';
import { Project } from '../../Project';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project =  {
    id: '',
    name: '',
    techstack: '',
    description: '',
    startdate: new Date(),
    duration: 0,
    budget: 0,
    status: ''
  }

  constructor(private location: Location, private projectService: ProjectdataService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.project.name != '' && this.project.techstack != '' && this.project.status != ''){
      this.projectService.addProject(this.project);
      this.project.name='';
      this.project.techstack= '';
      this.project.description= '';
      this.project.startdate= new Date();
      this.project.duration= 0;
      this.project.budget= 0;
      this.project.status= '';
      this.location.back();
    }
  }

}
