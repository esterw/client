import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-navbar-upper',
  templateUrl: './navbar-upper.component.html',
  styleUrls: ['./navbar-upper.component.css']
})
export class NavbarUpperComponent implements OnInit {
  currentHour
  currentMinutes
  constructor() { }

  ngOnInit() {
    this.setCurrentTime();
    setInterval(() => {
      this.setCurrentTime()
    }, 1000);
  }

  setCurrentTime() {
    this.currentMinutes = new Date().getMinutes();
    this.currentHour = new Date().getHours();

    if (this.currentMinutes.toString().length == 1)
      this.currentMinutes = "0" + new Date().getMinutes();
    if (this.currentHour.toString().length == 1)
      this.currentHour = "0" + new Date().getHours();
  }
}


