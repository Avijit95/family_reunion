import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
// import { CommonFunction } from '../../../class/common/common-function';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  constructor(public cookies: CookieService, public router: Router, private storage: Storage) {
    this.storage.remove('token');
    this.storage.remove('/');  
   }

  ngOnInit() {
    this.storage.remove('token');
    this.storage.remove('/'); 
    setTimeout(() => {
      this.router.navigateByUrl('/welcomepage');
      window.location.href='/';
    }, 1500); 
  }

}
