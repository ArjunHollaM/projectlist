import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import  '@firebase/auth';
import "@firebase/firestore"
import firebase from 'firebase/compat/app'
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css']
})
export class PhoneLoginComponent implements OnInit {
  phno: any;
  reCaptchaVerifier:any
  constructor(public authentication:AngularFireAuth,public router:Router) { }

  ngOnInit(): void {
  }
  getCode(){
    this.reCaptchaVerifier= new firebase.auth.RecaptchaVerifier('sib',{})

    firebase.auth()
    .signInWithPhoneNumber(this.phno,this.reCaptchaVerifier)
    .then((confirmationResult)=>{
      localStorage.setItem('verificationId',JSON.stringify(confirmationResult.verificationId))
      this.router.navigate(['/code'])
    })
    .catch((error)=>{
      alert(error.message)
      setTimeout(()=>{
        window.location.reload()
      })
    })
  }
}
