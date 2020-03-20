import { Component, OnInit, OnDestroy, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  fakeToken;
  title = 'app2';

  @HostListener('window:sendToken', ['$event'])
  onMessage(event) {
    this.fakeToken = event.detail.token;
    console.log('event', event);
  }

  ngOnDestroy(): void {
    //window.removeEventListener('sendToken', this.fakeToken);
  }
}
