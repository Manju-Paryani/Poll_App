import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  signin_url = 'https://api.cherryko.tk/users/sign_in' 
  signUp_url = ''
  header =  {
    'Content-Type' : "application/json"
  };
  
  constructor(public httpClient: HttpClient) { 
      }

  signin(cred:any){
   return this.httpClient.post(this.signin_url, cred)    
  }

  signUp(data:any){
    return this.httpClient.post(this.signUp_url, data)    
   }
}
