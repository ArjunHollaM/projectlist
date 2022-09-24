import { Component, OnInit } from '@angular/core';
import { ProjectdataService } from 'src/app/services/projectdata.service';
import { Members } from '../../Members';
import { Project } from '../../Project';
import { Location } from '@angular/common';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent implements OnInit {

  memberInfo: Members;
  projectUC: Project['id'];

  constructor(private location: Location, private projectService: ProjectdataService, private router: Router) { }

  ngOnInit(): void {
    this.projectUC = ProjectDetailsComponent.projForMembers;
    console.log(this.projectUC)
    this.memberInfo = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      hoursPerWeek: 0
    }
  }

  async onSubmit() {
  
    console.log(this.memberInfo)
    console.log(this.projectUC)
    await this.projectService.addMembers(this.projectUC,this.memberInfo)
    .then(()=>{
      alert("Member was added successfully!");
      this.router.navigate(['/projects']);})
    .catch(()=>alert('Error adding member'));
    this.location.back()
    this.memberInfo.firstName = '';
    this.memberInfo.lastName = '';
    this.memberInfo.email = '';
    this.memberInfo.phone = '';
    this.memberInfo.hoursPerWeek = 0;
  }

}
