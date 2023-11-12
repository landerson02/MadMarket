import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../../objects/category";
import {User} from "../../objects/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() categories?: Category[];
  @Input() user?: User;
  @Output() categorySelected = new EventEmitter<number>();
  @Output() saveSelected = new EventEmitter<void>();
  @Output() signInSelected = new EventEmitter<void>();
  @Output() sellSelected = new EventEmitter<void>();
  @Output() profileSelected = new EventEmitter<void>();

  onCategorySelected(id: number) {
    this.categorySelected.emit(id);
  }

  onSaveSelected() {
    this.saveSelected.emit();
  }

  onSignInSelected() {
    this.signInSelected.emit();
  }


  onSellSelected() {
    this.sellSelected.emit();
  }

  onProfileSelected() {
    this.profileSelected.emit();
  }
}
