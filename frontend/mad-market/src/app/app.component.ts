import { Component } from '@angular/core';
import { ApiService } from "./services/api.service";
import { Model } from "./objects/model";
import {Category} from "./objects/category";

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
  public selectedCategory?: Category = undefined;
  constructor(private apiService: ApiService) {
    this.model = new Model();
    this.getCategories();
    console.log(this.model);
  }

  getCategories() {
    this.apiService.getCategories().subscribe(data => {
      this.model.getCategories(data);
      console.log(this.model);
    });
  }

  onCategorySelected(id: number) {
    // Handle the selected category ID here
    console.log(id);
  }
}
