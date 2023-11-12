import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../../objects/category";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() categories?: Category[];
  @Output() categorySelected = new EventEmitter<number>();

  onCategorySelected(selectedCategory: Category) {
    this.categorySelected.emit(selectedCategory.id);
  }
}
