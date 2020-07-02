import * as firebase from 'firebase';
import { Component } from '@angular/core';

const config = {
  apiKey: 'AIzaSyDn9YEGAxzLuI-_DpADIQsO80ZWSMLAAls',
  databaseURL: 'https://simplechat-72ed2.firebaseio.com/'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';

  constructor() {
    firebase.initializeApp(config);
  }
}
