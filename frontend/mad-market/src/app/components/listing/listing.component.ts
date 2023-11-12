import {Component, Input} from '@angular/core';
import {Listing} from "../../objects/listing";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
 @Input() listing?: Listing;
}
