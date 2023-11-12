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
  @Output() saveSelected = new EventEmitter<void>();
  @Output() signInSelected = new EventEmitter<void>();

  onCategorySelected(id: number) {
    this.categorySelected.emit(id);
  }

  onSaveSelected() {
    this.saveSelected.emit();
  }

  onSignInSelected() {
    this.signInSelected.emit();
  }
}
