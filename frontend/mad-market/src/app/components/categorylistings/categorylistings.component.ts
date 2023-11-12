import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Model} from "../../objects/model";

@Component({
  selector: 'app-categorylistings',
  templateUrl: './categorylistings.component.html',
  styleUrls: ['./categorylistings.component.css']
})
export class CategorylistingsComponent implements OnChanges {
  @Input() model?: Model;
  @Input() categoryId?: number;
  public category?: string;

  ngOnChanges(changes: SimpleChanges): void {
    this.category = this.model?.categories.find(category => category.id == this.categoryId)?.name;
    console.log(this.category);
  }
}
