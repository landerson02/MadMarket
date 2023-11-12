import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Model} from "../../objects/model";
import {Listing} from "../../objects/listing";

@Component({
  selector: 'app-categorylistings',
  templateUrl: './categorylistings.component.html',
  styleUrls: ['./categorylistings.component.css']
})
export class CategorylistingsComponent implements OnChanges {
  @Input() model?: Model;
  @Input() categoryId?: number;
  public category?: string;
  public search: string = '';
  @Input() public expandedView: boolean = false;
  public exView: boolean = false;
  public selectedListing?: Listing;
  public displayedListings: Listing[] = [];
  @Output() public deleteListing = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    this.category = this.model?.categories.find(category => category.id == this.categoryId)?.name;
    this.exView = this.expandedView;
    this.displayedListings.length = 0;
    if (this.model) {
      for (let item of this.model.listings) {
        this.displayedListings.push(item);
      }
    }
  }

  onExpandedView(listing: Listing) {
    this.exView = true;
    this.selectedListing = listing;
  }

  onGoBack() {
    this.exView = false;
    this.displayedListings.length = 0;
    if (this.model) {
      for (let item of this.model.listings) {
        this.displayedListings.push(item);
      }
    }
  }

  onSearch() {
    this.displayedListings.length = 0;
    if (this.model) {
      for (let item of this.model.listings) {
        if (item.name.toLowerCase().includes(this.search.toLowerCase())) {
          this.displayedListings.push(item);
        }
        if (item.description.toLowerCase().includes(this.search.toLowerCase())) {
          this.displayedListings.push(item);
        }
      }
    }
  }

  onSort(val : number) {
    switch (val) {
      case 1:
        this.displayedListings.sort((a, b) => a.timestamp > b.timestamp ? 1 : -1);
        break;
      case 2:
        this.displayedListings.sort((a, b) => a.timestamp > b.timestamp ? -1 : 1);
        break;
      case 3:
        this.displayedListings.sort((a, b) => b.price - a.price);
        break;
      case 4:
        this.displayedListings.sort((a, b) => a.price - b.price);
        break;
    }
  }

  onDeleteListing(id: number) {
    this.deleteListing.emit(id);
  }
}
