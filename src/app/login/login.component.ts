import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ApiService} from '../services/api-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  
  public loginForm: FormGroup;
  public htmlData: any = {
    errorMsg: ""
  };

  constructor(public FormBuilder: FormBuilder, public Router: Router,public apiService:ApiService) {
    this.loginForm = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]]
    });
  }

  ngOnInit() { }

  login() {
    for (let i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsTouched();
    }

    if(this.loginForm.valid) {
      let postData = {
        "email" :this.loginForm.value.email,
	      "password" :this.loginForm.value.password
      }
      this.apiService.postData('login', postData).subscribe(( response: any ) => {
        if(response.status == true) {
          this.Router.navigateByUrl ('/homepage');
        } else {
          this.htmlData.errorMsg = "Invalid Email or Password.";
        }
      })
    }
  }
  
  inputUntouch(val: any) {
    this.loginForm.controls[val].markAsUntouched();
    
  }
}