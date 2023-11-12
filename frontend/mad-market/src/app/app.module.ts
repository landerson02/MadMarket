import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { ApiService } from "./services/api.service";
import { SigninComponent } from './components/signin/signin.component';
import { SavedComponent } from './components/saved/saved.component';
import { CategorylistingsComponent } from './components/categorylistings/categorylistings.component';
import { ListingComponent } from './components/listing/listing.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SellComponent } from './components/sell/sell.component';
import { ExpandedlistingComponent } from './components/expandedlisting/expandedlisting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HeaderComponent,
    SigninComponent,
    SavedComponent,
    CategorylistingsComponent,
    SavedComponent,
    ListingComponent,
    SellComponent,
    ExpandedlistingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
