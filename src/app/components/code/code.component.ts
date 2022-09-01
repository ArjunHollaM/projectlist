import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  '@firebase/auth';
import "@firebase/firestore"
import firebase from 'firebase/compat/app'
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  otp:any;
  verify:any;

  constructor(public auth:AuthenticationService,public router:Router) { }

  config = {
    allowNumbersOnly: true,
    length: 6,
    disableAutoFocus:false,
  }

  ngOnInit(): void {
    this.verify=JSON.parse(localStorage.getItem('verificationId')||'{}')
    console.log(this.verify)
  }
  onOtpChange(otpCode:any){
    this.otp=otpCode
  }
  handleClick(){
    var cred = firebase.auth.PhoneAuthProvider
    .credential(this.verify,this.otp)
    firebase.auth()
    .signInWithCredential(cred)
    .then((response)=>{
      // let ob = this.auth.isLoggedIn()
      // ob = new BehaviorSubject<boolean>(true)
      this.router.navigate(['/home'])
    })
    .catch((error)=>{
      alert(error)
    })
  }

}
