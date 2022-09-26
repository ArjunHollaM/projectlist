import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Members } from '../modules/projects/Members';
import { Project } from '../modules/projects/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {
  projectsCollection: AngularFirestoreCollection<Project>;
  projects: Observable<Project[]>;
  //snapshot: any;
  members:Observable<Members[]>
  projectDoc: AngularFirestoreDocument<Project>;
  memberstodel:Observable<Members[]>;
  memberDoc: AngularFirestoreDocument<Members>;
  

  constructor(public afs: AngularFirestore) {
    this.projectsCollection = afs.collection<Project>('projects');
    this.projects = this.projectsCollection.valueChanges({idField: 'id'});
    // this.projects = this.projectsCollection.snapshotChanges().pipe(
    //   map(actions => actions.map(a => {
    //     const data = a.payload.doc.data() as Project;
    //     data.id = a.payload.doc.id;
    //     return data;
    //   }))
    // );
   }

   getProjects() {
    return this.projects;
   }

   async addProject(project: Project) {
    console.log('working')
    this.projectsCollection.add(project);
    
   }

   async updateProject(project: Project){
    // delete project.id;
    this.afs.doc('projects/' + project.id).update(project);
  }

   async deleteProject(project: Project) {
    this.memberstodel = this.getMembers(project);
    this.memberstodel.forEach(element => {
      element.forEach(index => {
        console.log(index.id)
        this.afs.doc(`projects/${project.id}/members/${index.id}`).delete();
      })
    });
    this.projectDoc = this.afs.doc(`projects/${project.id}`);
    this.projectDoc.delete();
  }

  getMembers(project: Project){
    this.members=this.afs.collection<Members>('projects/'+project.id+'/members').valueChanges({idField:'id'})
    return this.members
  }

  async addMembers(project: Project['id'],memberdet:Members){
    this.afs.collection<Members>('projects/'+project+'/members').add(memberdet);
}
  
  async deleteMember(project: Project, member: Members){
    this.memberDoc = this.afs.doc(`projects/${project.id}/members/${member.id}`);
    console.log(this.memberDoc)
    this.memberDoc.delete();
  }

}
