import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Define a property to track the currently opened popup
  openedPopup: string | null = null;

  // Method to show the popup
  showPopup(popupId: string): void {
    // Set the openedPopup to the popup that's being opened
    this.openedPopup = popupId;
  }

  // Method to hide the popup
  hidePopup(): void {
    // Set the openedPopup back to null to close the popup
    this.openedPopup = null;
  }
}
