import { Component, OnInit } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app1';

  ngOnInit() {
    sessionStorage.setItem('app1', 'test app1');
    console.log('app1 lit dans la sessionStorage du header', sessionStorage.getItem('header'));
    console.log('app1 lit dans la sessionStorage du app2', sessionStorage.getItem('app2'));
  }
}
