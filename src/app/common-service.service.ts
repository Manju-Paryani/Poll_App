import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  signin_url = 'https://api.cherryko.tk/users/sign_in' 
  signUp_url = 'https://api.cherryko.tk/users'
  poll_url = 'https://api.cherryko.tk/api/v1/polls'
  header =  {
    'Content-Type' : "application/json"
  };options:any
  auth:any
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
}
