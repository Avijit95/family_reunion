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
  public errorMsg: string = '';
  constructor(public FormBuilder: FormBuilder, public Router: Router,public apiService:ApiService) {
    this.loginForm = this.FormBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() { }

  login() {
    if (this.loginForm.valid) {
      //console.log(this.loginForm.value);
    }
    for (let i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsTouched();
    }
    if(this.loginForm.valid){
      let postData={
        "email" :this.loginForm.value.username,
	      "password" :this.loginForm.value.password
      }
      this.apiService.postData('login',postData).subscribe((response:any)=>{
        console.log(response);
        this.Router.navigateByUrl ('/homepage');
      })
    }
  }
  
  inputUntouch(val: any) {
    this.loginForm.controls[val].markAsUntouched();
    
  }
}