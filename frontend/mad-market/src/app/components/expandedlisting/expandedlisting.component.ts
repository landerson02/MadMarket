import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Listing} from "../../objects/listing";
import {Category} from "../../objects/category";

@Component({
  selector: 'app-expandedlisting',
  templateUrl: './expandedlisting.component.html',
  styleUrls: ['./expandedlisting.component.css']
})
export class ExpandedlistingComponent {
  @Input() listing?: Listing;
  @Input() userMode?: boolean;
  @Input() categories? : Category[];
  @Output() public goBack = new EventEmitter<void>();

  onGoBack() {
    this.goBack.emit();
  }

  getCategoryName(categoryId: number) {
    return this.categories?.find(category => category.id == categoryId)?.name;
  }
}
