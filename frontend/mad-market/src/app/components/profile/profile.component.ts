import {Component, Input} from '@angular/core';
import {Model} from "../../objects/model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() model?: Model;
}
