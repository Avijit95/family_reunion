import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  list:any;
  selected :any;
  constructor() { }
  select(item) {
    this.selected = item; 
};
isActive(item) {
    return this.selected === item;
};

  ngOnInit() {}

}
