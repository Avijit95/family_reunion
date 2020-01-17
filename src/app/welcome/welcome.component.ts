import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  constructor( private storage: Storage, public Router: Router,) { 
    this.storage.get('token').then((value) => {
      setTimeout(() => {
        if(value != null) {
          this.Router.navigateByUrl('/homepage');
        }
      },100);
    });
  }

  ngOnInit() {}

}
