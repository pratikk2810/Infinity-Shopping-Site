import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  access = false;
  constructor(private router: Router) { }
  public login(){
      localStorage.setItem('ACCESS_TOKEN', "access_token");
      this.access = true;
      return this.access;
  }
  public isLoggedIn(){
    const token = localStorage.getItem('ACCESS_TOKEN');
    if(token){
      return true;
    }
    return false;
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

}