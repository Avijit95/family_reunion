import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  constructor(private storage: Storage, public router: Router) {
    this.storage.get('token').then((value) => {
      setTimeout(() => {
        if(value == null) {
          this.router.navigateByUrl('/login');
        }
      }, 1000);
    });
  }

  ngOnInit() {}

}
