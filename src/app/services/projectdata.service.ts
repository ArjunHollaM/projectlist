import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Project } from '../modules/projects/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {
  projectsCollection: AngularFirestoreCollection<Project>;
  projects: Observable<Project[]>;
  //snapshot: any;
  projectDoc: AngularFirestoreDocument<Project>;

  constructor(public afs: AngularFirestore) {
    this.projectsCollection = afs.collection<Project>('projects');
    //this.projects = this.projectsCollection.valueChanges({idField: 'id'});
    this.projects = this.projectsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Project;
        const id = a.payload.doc.id;
        return data;
      }))
    );
   }

   getProjects() {
    return this.projects;
   }

   addProject(project: Project) {
    this.projectsCollection.add(project);
   }

   deleteProject(project: Project) {
    this.projectDoc = this.afs.doc(`projects/${project.id}`);
    this.projectDoc.delete();
   }

}
