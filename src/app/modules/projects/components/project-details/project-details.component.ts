import { Component, OnInit } from '@angular/core';
import { ProjectdataService } from 'src/app/services/projectdata.service';
import { Project } from '../../Project';
import { Location } from '@angular/common';
import { LoadProjectsComponent } from '../load-projects/load-projects.component';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  // project: Project =  {
  //   id: '',
  //   name: '',
  //   techstack: '',
  //   description: '',
  //   startdate: new Date(),
  //   duration: 0,
  //   budget: 0,
  //   status: ''
  // }
  project: Project

  constructor(private location: Location, private projectService: ProjectdataService,private projectComponent: LoadProjectsComponent) { }

  ngOnInit(): void {
    console.log(LoadProjectsComponent.updateFlag)
    if(LoadProjectsComponent.updateFlag===true){
      this.project = LoadProjectsComponent.projectToEdit;
      console.log(this.project)
    }
    else{
      this.project =  {
        id: '',
        name: '',
        techstack: '',
        description: '',
        startdate: new Date(),
        duration: 0,
        budget: 0,
        status: ''
      }
      console.log(this.project)

    }
    
  }

  onSubmit() {
    if(this.project.name != '' && this.project.techstack != '' && this.project.status != '' && LoadProjectsComponent.updateFlag==false){
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
    else if(this.project.name != '' && this.project.techstack != '' && this.project.status != '' && LoadProjectsComponent.updateFlag==true){
      this.projectService.updateProject(this.project);
      LoadProjectsComponent.updateFlag = false;
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
