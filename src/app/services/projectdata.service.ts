import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Project } from '../modules/projects/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {
  projectsCollection: AngularFirestoreCollection<Project>;
  projects: Observable<Project[]>;
  snapshot: any;

  constructor(public afs: AngularFirestore) {
    this.projectsCollection = afs.collection<Project>('projects');
    this.projects = this.projectsCollection.valueChanges();
    this.snapshot = this.projectsCollection.snapshotChanges();
   }

   getProjects() {
    return this.projects;
   }

}
