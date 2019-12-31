import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-networking',
  templateUrl: './networking.component.html',
  styleUrls: ['./networking.component.scss'],
})
export class NetworkingComponent implements OnInit {
  public viewDivFlug: any = "Attendees";
  constructor() { }

  ngOnInit() {}
  clickButton(flug) {
    this.viewDivFlug = flug;
  }

}
