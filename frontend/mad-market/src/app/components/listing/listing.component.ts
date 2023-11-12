import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Listing} from "../../objects/listing";
import {User} from "../../objects/user";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
 @Input() listing?: Listing;
 @Input() user?: User;
 @Output() expandedView = new EventEmitter<any>;
  formatPrice(price: number): string {
    // Check if price is defined
      // Use toFixed to format the price to 2 decimal places
      return price.toFixed(2);

    // Handle the case where price is undefined
    // return '';
  }

  onExpandedView() {
    this.expandedView.emit(this.listing);
  }

  onSaveListing(listingId: number, userId: number) {

  }
}
