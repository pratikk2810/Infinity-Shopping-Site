import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from  'src/app/auth/auth.service';
import { ItemService } from 'src/app/common/services/item.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private api: ItemService, private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }
loginForm: FormGroup;
isSubmitted  =  false;
wrong = false;
token:any;
message:any;

ngOnInit() {
  this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
});
}
get f() { return this.loginForm.controls; }

onSubmit(){
  const obj = {
    username : this.loginForm.value.email,
    password : this.loginForm.value.password
  } 
  console.log(this.loginForm.value);
  /*this.api.loginJango(obj).subscribe(
    result => {
      this.token = result
  },
  error=>{console.log(error)});

this.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk5MjI4MjAxLCJqdGkiOiJmYjlhNzk5MmVjZjk0NGFmYjQ3NWVhMTU1YjdhYWY0ZSIsInVzZXJfaWQiOjN9.KoS_nTmQ7f08Cm5nBBc1xy5aiSjVEKu_VUZAA4pZ5HI";
*/
  this.isSubmitted = true;
  if(this.loginForm.invalid){
    return;
  }
/*if(this.isSubmitted){
  this.api.getMessage(this.token).subscribe(
    result =>{
        this.message = result;
        this.wrong = true;
    }
  )

}*/



  if(this.loginForm.value.email == 'admin@gmail.com' && this.loginForm.value.password == '123456')
  {
    this.wrong = this.authService.login();
     this.wrong = true;
  }
  if(this.wrong)
  {
    alert("Login Success");
    this.router.navigateByUrl('/home');
  }
  else {
    alert("Wrong Credential");
  }

}

}