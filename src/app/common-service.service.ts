import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  signin_url = 'https://api.cherryko.tk/users/sign_in' 
  signUp_url = 'https://api.cherryko.tk/users'
  poll_url = 'https://api.cherryko.tk/api/v1/polls'
  createPoll_url = 'https://api.cherryko.tk/api/v1/polls'
  myPoll_url = 'https://api.cherryko.tk/api/v1/polls'
  header =  {
    'Content-Type' : "application/json"
  };options:any
  auth:any = {'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjY4Nzc0NzIwLCJleHAiOjE2NzAwNzA3MjAsImp0aSI6IjQ1MjBjZjA5LThmNmEtNDUzMC1hZDNjLTg2MGM5MzQ0OWViNSJ9.ChxsSeer7qpHlz3zLnzdpAddZB-KN3T4fOMSVoWSG60'}
  userData: any
  
  constructor(public httpClient: HttpClient) { 
      }
      setOptions() {
        this.options = { 'headers': new HttpHeaders(this.auth) , observe: 'response'};
    }

  signin(cred:any){
   return this.httpClient.post(this.signin_url, cred)    
  }

  signUp(data:any){
    return this.httpClient.post(this.signUp_url, data)    
   }

  pollList(){
    return this.httpClient.get(this.poll_url)    
   }

  createPoll(data:any){
    this.options = { 'headers': new HttpHeaders( {'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjY4Nzc0NzIwLCJleHAiOjE2NzAwNzA3MjAsImp0aSI6IjQ1MjBjZjA5LThmNmEtNDUzMC1hZDNjLTg2MGM5MzQ0OWViNSJ9.ChxsSeer7qpHlz3zLnzdpAddZB-KN3T4fOMSVoWSG60'}) };
    return this.httpClient.post(this.createPoll_url, data, this.options)    
   }

   myPoll(){

   }
}
