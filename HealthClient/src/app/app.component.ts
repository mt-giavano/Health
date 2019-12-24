import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
  // <app-patients></app-patients>
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    
  }

}
