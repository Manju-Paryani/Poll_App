import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credential-page',
  templateUrl: './credential-page.page.html',
  styleUrls: ['./credential-page.page.scss'],
})
export class CredentialPagePage implements OnInit {
  passwordIcon1: string = 'eye-off';
  show: boolean = false;
  constructor() { }

  ngOnInit() {

  }

  hideShowPassword() {
    this.show = !this.show;
    this.passwordIcon1 = this.passwordIcon1 === 'eye-off' ? 'eye-on' : 'eye-off';
  }
  ey1: any = false;
  password: any = "";
  btnCheck = false
  checkEvent() {
    if (this.password && this.password.length > 0) {
      this.ey1 = true;
    }
    else {
      this.ey1 = false;
    }
    if (this.password && this.password.length > 0) {
      this.btnCheck = true
      return true;
    }
    else {
      this.btnCheck = false
      return false;
    }
  }

}
