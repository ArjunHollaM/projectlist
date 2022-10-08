import { Component, OnInit } from '@angular/core';
import { ProjectdataService } from 'src/app/services/projectdata.service';
import { Members } from '../../Members';
import { Project } from '../../Project';
import { Location } from '@angular/common';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { LoadProjectsComponent } from '../load-projects/load-projects.component';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent implements OnInit {

  memberInfo: Members;
  projectUC: Project['id'];
  flag: boolean;
  projectUCforEdit: Project;
  downloadURL:Observable<string>
  uploadPercent:Observable<number|undefined>
  imgupdateFlag:Boolean=true

  constructor(private location: Location, private projectService: ProjectdataService, private storage:AngularFireStorage, private router: Router) { }

  ngOnInit(): void {
    this.flag = ProjectDetailsComponent.updateMemFlag;
    if(ProjectDetailsComponent.updateMemFlag===true){
      this.projectUCforEdit = ProjectDetailsComponent.projectMemEdit;
      this.memberInfo = ProjectDetailsComponent.memberToEdit;
    }
    else{
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
    
  }

  ngOnDestroy(): void {
    this.memberInfo.firstName = '';
    this.memberInfo.lastName = '';
    this.memberInfo.email = '';
    this.memberInfo.phone = '';
    this.memberInfo.hoursPerWeek = 0;
    this.flag = false;
    ProjectDetailsComponent.updateMemFlag = false;
  }

  async onSubmit() {
    if(ProjectDetailsComponent.updateMemFlag==false){
      console.log(this.memberInfo)
      console.log(this.projectUC)
      await this.projectService.addMembers(this.projectUC,this.memberInfo)
      .then(()=>{
        alert("Member was added successfully!");
        this.router.navigate(['/projects']);
      })
      .catch(()=>alert('Error adding member'));
      //this.location.back()
      this.memberInfo.firstName = '';
      this.memberInfo.lastName = '';
      this.memberInfo.email = '';
      this.memberInfo.phone = '';
      this.memberInfo.hoursPerWeek = 0;
      this.memberInfo.pppath = '';
    }
    else if(ProjectDetailsComponent.updateMemFlag==true){
      await this.projectService.updateMember(this.projectUCforEdit,this.memberInfo)
      .then(()=>{
        alert("Member was updated successfully!")
        this.router.navigate(['/projects']);
      })
      .catch(()=>alert('Error updating member'));
      ProjectDetailsComponent.updateMemFlag = false;
      this.memberInfo.firstName = '';
      this.memberInfo.lastName = '';
      this.memberInfo.email = '';
      this.memberInfo.phone = '';
      this.memberInfo.hoursPerWeek = 0;
      this.memberInfo.pppath = '';
    }
    
  }

  uploadFile(event:any){
    this.imgupdateFlag=false
    const file=event.target.files[0]
    const filePath='profilepic/'+this.memberInfo.firstName
    const fileRef = this.storage.ref(filePath);
    const task=this.storage.upload(filePath,file)
   this.uploadPercent=task.percentageChanges()
    task.snapshotChanges().pipe(
      finalize(() => {
        this.imgupdateFlag=true
        this.downloadURL = fileRef.getDownloadURL()
        this.downloadURL.subscribe(data=>this.memberInfo.pppath=data)
      } )
   )
  .subscribe()
  }

}
