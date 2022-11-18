
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-credential-page',
  templateUrl: './credential-page.page.html',
  styleUrls: ['./credential-page.page.scss'],
})
export class CredentialPagePage implements OnInit {
type = 'signin'
options:any
auth:any
userType = 'user'

  username: string = '';
  password: any;
  fullname: string = '';
  email: string = '';
  otp!: number;
  mobileNo: number | undefined;
  set_password: any;
  confirm_password: any;

  constructor(public commonService: CommonServiceService) { }

  ngOnInit() {
  }

  setOptions() {
    this.options = { 'headers': new HttpHeaders(this.auth) };
}
  signupFunc(){
      let cred= { "user": { "email": "alok@test.com", 
      "password": "mypassword" } }
    this.commonService.signUp(cred).subscribe((response: any) => {
      console.log('signin success',response)
      return response
    })
  }
  signinFunc(){
    let cred= { "user": { 
      "email": "alok@test.com", 
    "password": "mypassword" 
  } }
    this.commonService.signin(cred).subscribe((response: any) => {
      console.log('signin success',response)
      return response
    })
  }

  userTypeCheck(userType:any){
    if(userType == 'user'){
      this.userType = 'user'

    }else if(userType == 'admin'){
      this.userType = 'admin'
    }

  }

  checkevent(btnName:any){
    if(this.type == 'signin'){
      return true
  }else if(btnName == 'signup'){
return false
  }else{
    return false
  }
}
}
