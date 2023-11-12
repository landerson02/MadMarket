import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Model} from "../../objects/model";
import {Listing} from "../../objects/listing";

@Component({
  selector: 'app-categorylistings',
  templateUrl: './categorylistings.component.html',
  styleUrls: ['./categorylistings.component.css']
})
export class CategorylistingsComponent implements OnChanges {

  categories = [
    { id: 1, name: 'Tickets', icon: "fa fa-ticket-alt" },
    { id: 2, name: 'Appliances', icon: "fa fa-blender" },
    { id: 3, name: 'Furniture', icon: "fa fa-couch" },
    { id: 4, name: 'Sub-Leases', icon: "fa fa-file-contract" },
    { id: 5, name: 'Clothing', icon: "fa fa-tshirt" },
    { id: 6, name: 'Technology', icon: "fa fa-laptop" },
    { id: 7, name: 'Other', icon: "fa fa-ellipsis-h" }
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
  @Output() public deleteListing = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    if (this.categoryId !== undefined) {
      const category = this.categories.find(cat => cat.id === this.categoryId);
      if (category) {
        this.selectedCategory = category;
      }
    }

    this.category = this.model?.categories.find(category => category.id == this.categoryId)?.name;
    this.exView = this.expandedView;
    // this.displayedListings.length = 0;
    // if (this.model) {
    //   for (let item of this.model.listings) {
    //     this.displayedListings.push(item);
    //   }
    // }
    // console.log(this.displayedListings);
  }

  onExpandedView(listing: Listing) {
    this.exView = true;
    this.selectedListing = listing;
  }

  onGoBack() {
    this.exView = false;
    // this.displayedListings.length = 0;
    // if (this.model) {
    //   for (let item of this.model.listings) {
    //     this.displayedListings.push(item);
    //   }
    // }
  }

  onSearch() {
    if (this.model) {
      this.model.displayedListings.length = 0;
      for (let item of this.model.listings) {
        if (item.name.toLowerCase().includes(this.search.toLowerCase())) {
          this.model.displayedListings.push(item);
        }
        if (item.description.toLowerCase().includes(this.search.toLowerCase())) {
          this.model.displayedListings.push(item);
        }
      }
    }
  }

  onSort(val : number) {
    if (this.model) {
      switch (val) {
        case 1:
          this.model.displayedListings.sort((a, b) => a.timestamp > b.timestamp ? 1 : -1);
          break;
        case 2:
          this.model.displayedListings.sort((a, b) => a.timestamp > b.timestamp ? -1 : 1);
          break;
        case 3:
          this.model.displayedListings.sort((a, b) => b.price - a.price);
          break;
        case 4:
          this.model.displayedListings.sort((a, b) => a.price - b.price);
          break;
      }
    }
  }

  onDeleteListing(id: number) {
    this.deleteListing.emit(id);
  }
}
