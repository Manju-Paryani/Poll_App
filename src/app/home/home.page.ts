import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { HTTP } from '@ionic-native/http/ngx';
// import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import {  from, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  signin_url = 'https://api.cherryko.tk/users/sign_in' 
  sign_up = 'https://api.cherryko.tk/users'
  create_poll = 'https://api.cherryko.tk/api/v1/polls' 
  header =  {
    'Content-Type' : "application/json"
  };
  
  constructor(public commonService: CommonModule,
    public httpClient: HttpClient) {}

  signin(){
    let cred= { "user": { "email": "alok@test.com", "password": "mypassword" } }
    this.httpClient.post(this.signin_url, cred)
    .subscribe((response: any) => {
      console.log('signin success',response)
    })
    // .catch((response: any) => {  
    //   console.log('signin err', response)
    // });

  }

  signup(){
    let cred= { "user": { "email": "manju@test.com", "password": "mypassword", "name": "Alok"} }
    this.httpClient.post(this.sign_up, cred)
    .subscribe((response: any) => {
      console.log('signup success',response)
    })
    // .catch((response: any) => {  
    //   console.log('signin err', response)
    // });

    

  }

  createPoll(){
    let cred= {
      "poll": {
          "topic":"what is your favourite color",
          "vote_options_attributes": [{"title":"blue"}, {"title":"red"}, {"title": "white"}, {"title":"yellow"}]
      }
  }
    this.httpClient.post(this.create_poll, cred)
    .subscribe((response: any) => {
      console.log('create poll success',response)
    })
    // .catch((response: any) => {  
    //   console.log('signin err', response)
    // });
  }

}
