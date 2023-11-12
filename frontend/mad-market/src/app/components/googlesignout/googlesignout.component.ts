import { Component } from '@angular/core';

declare const gapi: any;

@Component({
  selector: 'app-googlesignout',
  templateUrl: './googlesignout.component.html',
  styleUrls: ['./googlesignout.component.css']
})
export class GooglesignoutComponent {
  signOut(): void {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('User signed out.');
      // You can perform additional actions after sign-out if needed.
    });
  }
}
