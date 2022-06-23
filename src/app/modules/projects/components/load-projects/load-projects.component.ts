import { Component, OnInit } from '@angular/core';
import { projects } from '../../example-projects';
import { Project } from '../../Project';

@Component({
  selector: 'app-load-projects',
  templateUrl: './load-projects.component.html',
  styleUrls: ['./load-projects.component.css']
})
export class LoadProjectsComponent implements OnInit {
  projects: Project[] = projects;

  constructor() { }

  ngOnInit(): void {
  }

}
