import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
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
  selectedListing?: Listing;

  ngOnChanges(changes: SimpleChanges): void {
    this.category = this.model?.categories.find(category => category.id == this.categoryId)?.name;
    this.exView = this.expandedView;
  }

  onExpandedView(listing: Listing) {
    this.exView = true;
    this.selectedListing = listing;
  }
}
