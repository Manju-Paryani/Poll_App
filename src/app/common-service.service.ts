import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// var axios = require('axios');
// var data = JSON.stringify({
//   "user": {
//     "email": "alok@test.com",
//     "password": "mypassword"
//   }
// });

// var config = {
//   method: 'post',
//   url: 'https://api.cherryko.tk/users/sign_in',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  signin_url = 'https://api.cherryko.tk/users/sign_in' 
  signUp_url = 'https://api.cherryko.tk/users'
  poll_url = 'https://api.cherryko.tk/api/v1/polls'
  createPoll_url = 'https://api.cherryko.tk/api/v1/polls'
  myPoll_url = 'https://api.cherryko.tk/api/v1/polls'
  // submitPoll_url="https://api.cherryko.tk/api/v1/polls/3/vote"

  header =  {
    'Content-Type' : "application/json"
  };options:any
  auth:any = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjY4ODM3OTg2LCJleHAiOjE2NzAxMzM5ODYsImp0aSI6ImQzYjEwOGZlLTA3MjAtNDI0OS1iMTY3LTNiNDMxNTJhZjcxYiJ9.nZOitNvN1A7DGvpfcFh3NPoZtorhsGPP1KgFbcchb40'
  userData: any
  verifiedPolls:any
  unVerifiedPolls:any
  selectedPoll:any
  answeredPollCount:any
  approvedCount:any
  createdCount:any
  totalPollCount:any
  isAdmin:any 
  
  constructor(public httpClient: HttpClient) { 
      }
      setOptions() {
        this.options = { 'headers': new HttpHeaders(this.auth)};
    }

  signin(cred:any){
   return this.httpClient.post(this.signin_url, cred,  {observe: 'response'})    
  }

  signUp(data:any){
    return this.httpClient.post(this.signUp_url, data)    
   }

  pollList() : Observable<any>{
    let auth = {
      'Authorization' : this.auth
    }
    this.options = { 'headers': new HttpHeaders(auth) };
    return this.httpClient.get(this.poll_url,this.options)    
   }

  createPoll(data:any){
   let auth= {
      'Authorization' : this.auth
    }
    this.options = { 'headers': new HttpHeaders(auth) };
    return this.httpClient.post(this.createPoll_url, data, this.options)    
   }
   
   submitPoll(data: any, id: number){
    let auth = {
      'Authorization' : this.auth
    }
    let submitPoll_url="https://api.cherryko.tk/api/v1/polls/"+id+"/vote";
    this.options = { 'headers': new HttpHeaders(auth) };
    return this.httpClient.post(submitPoll_url, data, this.options)   
   }

   verifyPoll( id: number) : Observable<any>{
    let auth = {
      'Authorization' : this.auth
    }
    let data = {
      "vote_option_id": ''
  }
    let verifyPoll_url="https://api.cherryko.tk/api/v1/polls/"+id+"/verify_poll";
    this.options = { 'headers': new HttpHeaders(auth) };
    return this.httpClient.post(verifyPoll_url, data, this.options)   
   }
}
