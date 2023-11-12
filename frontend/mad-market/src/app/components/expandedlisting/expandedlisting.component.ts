import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {Listing} from "../../objects/listing";
import {Category} from "../../objects/category";
import {ApiService} from "../../services/api.service";
import {User} from "../../objects/user";

@Component({
  selector: 'app-expandedlisting',
  templateUrl: './expandedlisting.component.html',
  styleUrls: ['./expandedlisting.component.css']
})
export class ExpandedlistingComponent implements OnChanges{
  @Input() listing?: Listing;
  @Input() userMode?: boolean;
  @Input() categories? : Category[];
  @Output() public goBack = new EventEmitter<void>();
  @Output() public deleteListing = new EventEmitter<void>();
  public lister?: User;

  constructor(private apiService: ApiService) {}

  ngOnChanges() {
    this.getUser();
  }

  getUser() {
    if (this.listing) {
      this.apiService.getUserbyId(this.listing.userId).subscribe(data => {
        this.lister = data;
      });
    }
  }


  onGoBack() {
    this.goBack.emit();
  }

  getCategoryName(categoryId: number) {
    return this.categories?.find(category => category.id == categoryId)?.name;
  }

  onDeleteListing() {
    if (this.listing) {
      this.deleteListing.emit();
    }
    this.onGoBack();
  }

  sendEmail() {
    const email = this.lister?.email;
    if (email) {
      window.location.href = `mailto:${email}`;
    } else {
      console.error('Lister email is not available.');
    }
  }
}
