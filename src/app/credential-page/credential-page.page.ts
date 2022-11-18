import { Component, OnInit } from '@angular/core';
import { type } from 'os';

@Component({
  selector: 'app-credential-page',
  templateUrl: './credential-page.page.html',
  styleUrls: ['./credential-page.page.scss'],
})
export class CredentialPagePage implements OnInit {
  username: string = '';
  password: any;
  fullname: string = '';
  email: string = '';
  otp!: number;
  mobileNo: number | undefined;
  set_password: any;
  confirm_password: any;


  constructor() { }

  ngOnInit() {
  }

  

}
