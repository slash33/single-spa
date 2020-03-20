import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sendToken() {
    const event = new CustomEvent('sendToken', {
      detail: { token: 'fakeToken' }
    });
    window.dispatchEvent(event);
    console.log('dispatch', event);
  }

}
