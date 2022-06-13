import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // moveToHome() {
  //   console.log('we have to move to different page')
  // }
  // moveToProjects() {
  //   console.log('we have to move to different page')
  // }
  // moveToProfile() {
  //   console.log('we have to move to different page')
  // }

}
