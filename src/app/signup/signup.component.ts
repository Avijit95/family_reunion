import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../customvalidator';
import {ApiService} from '../services/api-service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  submitted = false;
  constructor(public FormBuilder: FormBuilder, public Router: Router,public apiService:ApiService,public _http: HttpClient,public cookieService: CookieService) {
    this._http.post(this.apiService.api_url+'temptoken',undefined).subscribe((resr:any)=>{
        // console.log(resr);
        if(resr.status){
          this.cookieService.set('jwttoken',resr.token);
        }
    })
    this.signupForm = this.FormBuilder.group({
      email:  ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      phoneno: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    },
      {
        validator: MustMatch('password', 'confirmpassword')
    })
   }

  ngOnInit() {}
  signup() {
    for (let i in this.signupForm.controls) {
      this.signupForm.controls[i].markAsTouched();
    }
    if (this.signupForm.valid) {
      delete this.signupForm.value.confirmpassword;
      let postData={
        "source": "users",
        "data":this.signupForm.value
      }
    this.apiService.postData('addorupdatedata',postData).subscribe((res:any)=>{
      if(res.status){
          console.log("value inserted");
          this.Router.navigateByUrl ('/login');        
      }
      
    })
    }

    this.submitted = true;
  }

 
  inputUntouch(val: any) {
    this.signupForm.controls[val].markAsUntouched();
  }
  
}

