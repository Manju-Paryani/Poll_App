
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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

  constructor(public commonService: CommonServiceService,
    public navCtrl : NavController) { }

  ngOnInit() {
  }

  setOptions() {
    this.options = { 'headers': new HttpHeaders(this.auth) };
}
  signupFunc(){
      let cred= { "user": { "email": this.email, 
      "password": this.set_password,
    "name" : this.fullname } }
    this.commonService.signUp(cred).subscribe((response: any) => {
      if(response.status.code == 200){
        this.commonService.userData = response.data
        this.navCtrl.navigateForward('/my-dashboard')
      }
      console.log('signup success',response)
    })
  }
  signinFunc(){
    let cred= { "user": { 
      "email": this.username, 
    "password": this.password
  }}
    this.commonService.signin(cred).subscribe((response: any) => {
      console.log('signin success',response)
      if(response.status.code == 200){
        this.commonService.userData = response.data
        this.navCtrl.navigateForward('/my-dashboard')
      }
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
      if(this.username && this.password)
      {
        return true
      }else{
        return false
      }
  }else if(btnName == 'signup'){
return false
  }else{
    return false
  }
}
}
