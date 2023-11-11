import { Component } from '@angular/core';
import { ApiService } from "./services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private apiService: ApiService) {
    this.getTest();
  }

  getTest() {
    this.apiService.getTest().subscribe(data => {
      console.log(data);
    });
  }
}
