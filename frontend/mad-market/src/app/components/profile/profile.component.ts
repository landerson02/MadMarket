import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {User} from "../../objects/user";
import {Listing} from "../../objects/listing";
import {Category} from "../../objects/category";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnChanges {
  @Input() user?: User;
  @Input() categories?: Category[];
  @Input() expandedView: boolean = false;
  @Output() public deleteListing = new EventEmitter<number>();
  public exView: boolean = false;
  public selectedListing?: Listing;

  ngOnChanges(): void {
    this.exView = this.expandedView;
  }

  onExpandedView(listing: Listing) {
    this.exView = true;
    this.selectedListing = listing;
  }

  onGoBack() {
    this.exView = false;
  }

  onDeleteListing(id: number) {
    this.deleteListing.emit(id);
  }
}
