import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
    let config = {
      apiKey: 'AIzaSyDT89bWfNtSjjVKxEAuxpZtY7jESjAx6to',
      authDomain: 'jta-instagram-clone-b7a32.firebaseapp.com',
      databaseURL: 'https://jta-instagram-clone-b7a32.firebaseio.com',
      projectId: 'jta-instagram-clone-b7a32',
      storageBucket: 'jta-instagram-clone-b7a32.appspot.com',
      messagingSenderId: '884393633680'
    };

    firebase.initializeApp(config);
  }




}
