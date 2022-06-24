import { Component, OnInit } from '@angular/core';
import { projects } from '../../example-projects';
import { Project } from '../../Project';
import {Location} from '@angular/common';

@Component({
  selector: 'app-load-projects',
  templateUrl: './load-projects.component.html',
  styleUrls: ['./load-projects.component.css']
})
export class LoadProjectsComponent implements OnInit {
  projects: Project[] = projects;

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

}
