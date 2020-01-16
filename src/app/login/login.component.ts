import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../services/api-service';
import { Storage } from '@ionic/storage';

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

  constructor(public FormBuilder: FormBuilder, public Router: Router, public apiService: ApiService, public loadingController: LoadingController, private storage: Storage) {
    this.loginForm = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]]
    });
  }

  ngOnInit() { }

  async login() {
    for (let i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsTouched();
    }


    if (this.loginForm.valid) {
      const loading = await this.loadingController.create({
        message: 'Loading....',
        duration: 2000
      });

      await loading.present();
      const { role, data } = await loading.onDidDismiss();

      this.apiService.postData('login', this.loginForm.value).subscribe((response: any) => {
        if (response.status == "success") {
          console.log("okk>>", response);

          /* Store into the stroage */
          this.storage.set('jwtToken', response.token);

          this.Router.navigateByUrl('/homepage');
        } else {
          this.htmlData.errorMsg = "Invalid Email or Password.";
        }
      });
    }
  }

  inputUntouch(val: any) {
    this.loginForm.controls[val].markAsUntouched();

  }
}