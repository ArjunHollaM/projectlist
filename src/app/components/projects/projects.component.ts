import { Component, OnInit } from '@angular/core';
import {projects} from '../../example-projects'
import {Project} from '../../Project'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = projects;

  constructor() { }

  ngOnInit(): void {
  }

}
