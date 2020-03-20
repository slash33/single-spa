import { Component, OnInit, OnDestroy, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  fakeToken;
  title = 'app2';

  @HostListener('window:sendToken', ['$event'])
  onMessage(event) {
    this.fakeToken = event.detail.token;
    console.log('event', event);
  }

  ngOnInit() {
    sessionStorage.setItem('app2', 'test app2');

    console.log('app2 lit dans la sessionStorage du header', sessionStorage.getItem('header'));
    console.log('app2 lit dans la sessionStorage du app1', sessionStorage.getItem('app1'));
  }

  ngOnDestroy(): void {
    //window.removeEventListener('sendToken', this.fakeToken);
  }
}
