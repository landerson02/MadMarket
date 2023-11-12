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
  public addListing: boolean = false;
  public selectedCategory: number = 0;
  constructor(private apiService: ApiService) {
    this.model = new Model();
    this.getCategories();
    this.getListings(0);
    console.log(this.model);
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
    console.log(this.model);
  }

  onCategorySelected(id: number) {
    this.selectedCategory = id;
    this.home = id == 0;
    this.signIn = false;
    this.saved = false;
    this.addListing = false;
    this.getListings(id);
  }

  onSaveSelected() {
    this.saved = true;
    this.signIn = false;
    this.home = false;
    this.addListing = false;
    this.selectedCategory = 0;
  }

  onSignInSelected() {
    this.signIn = true;
    this.saved = false;
    this.home = false;
    this.addListing = false;
    this.selectedCategory = 0;
  }

  onAddListingSelected() {
    this.addListing = true;
    this.signIn = false;
    this.saved = false;
    this.home = false;
    this.selectedCategory = 0;
  }

  onSigningUpSelected(input : string) {
    const fields = input.split(",,");
    this.apiService.addUser(fields[0], fields[1], fields[2]).subscribe(data => {
      console.log(data);
    });
  }

  onSigningInSelected(input : string) {
    console.log(input);
  }
}
