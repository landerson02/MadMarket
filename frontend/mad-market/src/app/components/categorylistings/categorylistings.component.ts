import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Model} from "../../objects/model";
import {Listing} from "../../objects/listing";
import { faTicketAlt, faBlender, faCouch, faFileContract, faTshirt, faLaptop, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categorylistings',
  templateUrl: './categorylistings.component.html',
  styleUrls: ['./categorylistings.component.css']
})
export class CategorylistingsComponent implements OnChanges {

  categories = [
    { id: 1, name: 'Tickets', icon: faTicketAlt },
    { id: 2, name: 'Appliances', icon: faBlender },
    { id: 3, name: 'Furniture', icon: faCouch },
    { id: 4, name: 'Sub-Leases', icon: faFileContract },
    { id: 5, name: 'Clothing', icon: faTshirt },
    { id: 6, name: 'Technology', icon: faLaptop },
    { id: 7, name: 'Other', icon: faEllipsisH }
  ];

  selectedCategory: { id: number, name: string, icon: any } | undefined;

  @Input() model?: Model;
  @Input() categoryId?: number;
  public category?: string;
  public search: string = '';
  @Input() public expandedView: boolean = false;
  public exView: boolean = false;
  public selectedListing?: Listing;
  public displayedListings: Listing[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.categoryId !== undefined) {
      const category = this.categories.find(cat => cat.id === this.categoryId);
      if (category) {
        this.selectedCategory = category;
      }
    }

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
}
