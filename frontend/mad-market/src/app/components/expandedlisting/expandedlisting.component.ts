import {Component, Input} from '@angular/core';
import {Listing} from "../../objects/listing";

@Component({
  selector: 'app-expandedlisting',
  templateUrl: './expandedlisting.component.html',
  styleUrls: ['./expandedlisting.component.css']
})
export class ExpandedlistingComponent {
  @Input() listing?: Listing;
}
