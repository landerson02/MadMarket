import {Component, Input} from '@angular/core';
import {Category} from "../../objects/category";

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent {
  @Input() categories?: Category[];
}
