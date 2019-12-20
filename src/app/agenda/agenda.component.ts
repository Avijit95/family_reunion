import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
public viewDivFlug: any = "Speakers";

items = ['27 Sun', '28 Mon', '29 Tue', '30 Wed', '01 Thu', '02 Fri', '03 Sat'];

  constructor() {
    this.clickButton(this.items[0]);
  }
  

  ngOnInit() {}

  clickButton(flug) {
    this.viewDivFlug = flug;
  }

}
