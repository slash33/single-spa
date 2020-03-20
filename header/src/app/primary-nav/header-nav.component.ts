import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sessionStorage.setItem('header', 'test header');
    console.log('header lit dans la sessionStorage du app1', sessionStorage.getItem('app1'));
    console.log('header lit dans la sessionStorage du app2', sessionStorage.getItem('app2'));
  }

  sendToken() {
    const event = new CustomEvent('sendToken', {
      detail: { token: 'fakeToken' }
    });
    window.dispatchEvent(event);
    console.log('dispatch', event);
  }

}
