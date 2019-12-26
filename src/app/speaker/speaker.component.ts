import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerComponent implements OnInit {
  
  public viewDivFlug: any = "Speakers";

  constructor() { }

  ngOnInit() {}

  clickButton(flug) {
    this.viewDivFlug = flug;
  }

}