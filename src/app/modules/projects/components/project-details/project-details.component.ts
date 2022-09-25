import { Component, OnInit } from '@angular/core';
import { ProjectdataService } from 'src/app/services/projectdata.service';
import { Project } from '../../Project';
import { Location } from '@angular/common';
import { LoadProjectsComponent } from '../load-projects/load-projects.component';
import { Members } from '../../Members';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  
  project: Project
  members$: Observable<Members[]>;
  flag: boolean = false;
  static projForMembers: Project['id']

  constructor(private location: Location, private projectService: ProjectdataService,private projectComponent: LoadProjectsComponent) { }

  ngOnInit(): void {
    ProjectDetailsComponent.projForMembers = LoadProjectsComponent.projectToEdit.id
    this.flag = LoadProjectsComponent.updateFlag;
    if(LoadProjectsComponent.updateFlag===true){
      this.project = LoadProjectsComponent.projectToEdit;
      console.log(this.project)
    }
    else{
      this.project =  {
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
    if(this.project){
      this.members$ = this.projectService.getMembers(this.project)
    }
    
  }

  ngOnDestroy(): void {
    //this.project.id = '';
    this.project.name='';
    this.project.techstack= '';
    this.project.description= '';
    this.project.startdate= new Date();
    this.project.duration= 0;
    this.project.budget= 0;
    this.project.status= '';
    this.flag = false;
    LoadProjectsComponent.updateFlag = false;
  }

  async onSubmit() {
    if(this.project.name != '' && this.project.techstack != '' && this.project.status != '' && LoadProjectsComponent.updateFlag==false){
      await this.projectService.addProject(this.project)
      .then(()=>alert("Project was added successfully!"))
      .catch(()=>alert('Error adding project'));
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
      await this.projectService.updateProject(this.project)
      .then(()=>alert("Project was updated successfully!"))
      .catch(()=>alert('Error updating project'));
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
