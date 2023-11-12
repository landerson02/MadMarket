import { Component } from '@angular/core';
import { ApiService } from "./services/api.service";
import { Model } from "./objects/model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public model : Model = new Model();
  public signIn: boolean = false;
  public saved: boolean = false;
  public home: boolean = true;
  public profile: boolean = false;
  public addListing: boolean = false;
  public selectedCategory: number = 0;
  public expandedView: boolean = false;
  public signUpError: number = 0;
  public signInError: number = 0;

  constructor(private apiService: ApiService) {
    this.model = new Model();
    this.getCategories();
    this.getListings(0);
  }

  getCategories() {
    this.apiService.getCategories().subscribe(data => {
      this.model.getCategories(data);
    });
  }

  getListings(id : number) {
    if (id == 0) {
      this.apiService.getAllListings().subscribe(data => {
        this.model.getListings(data);
      });
    } else {
      this.apiService.getAllListingsByCategory(id).subscribe(data => {
        this.model.getListings(data);
      });
    }
  }

  onCategorySelected(id: number) {
    this.selectedCategory = id;
    this.home = id == 0;
    this.signIn = false;
    this.saved = false;
    this.addListing = false;
    this.getListings(id);
    this.expandedView = false;
    this.profile = false;
  }

  onSaveSelected() {
    this.saved = true;
    this.signIn = false;
    this.home = false;
    this.addListing = false;
    this.selectedCategory = 0;
    this.profile = false;
  }

  onSignInSelected() {
    this.signIn = true;
    this.saved = false;
    this.home = false;
    this.addListing = false;
    this.profile = false;
    this.selectedCategory = 0;
    this.signUpError = 0;
    this.signInError = 0;
  }

  onAddListingSelected() {
    this.addListing = true;
    this.signIn = false;
    this.saved = false;
    this.home = false;
    this.profile = false;
    this.selectedCategory = 0;
  }

  onAddProfileSelected() {
    this.profile = true;
    this.addListing = false;
    this.signIn = false;
    this.saved = false;
    this.home = false;
    this.selectedCategory = 0;
  }

  onSigningUpSelected(input : string) {
    const fields = input.split(",,");
    this.apiService.addUser(fields[0], fields[1], fields[2]).subscribe(data => {
      if (data) {
        this.signUpError = 1;
      } else {
        this.signUpError = 2;
      }
    });
  }

  onSigningInSelected(input : string) {
    this.apiService.getUser(input).subscribe(data => {
      if (data) {
        this.signInError = 1;
        this.model.getUser(data);
        if (this.model.user) {
          this.getListingByUser(this.model.user.userId);
        }
      } else {
        this.signInError = 2;
      }
    });
  }

  onAddListing(input : string) {
    const fields = input.split(",,");
    fields[2] = this.model.categories.find(x => x.name == fields[2])?.id.toString() || "0";
    this.apiService.addListing(Number(fields[0]), Number(fields[1]), Number(fields[2]),
      fields[3], fields[4], Number(fields[5])).subscribe(data => {
        console.log(data);
    });
    if (this.model.user) {
      this.getListingByUser(this.model.user.userId);
    }
  }

  getListingByUser(id: number) {
    this.apiService.getListingByUser(id).subscribe(data => {
      this.model.user?.getListing(data);
    });
  }
}
