import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {SocialLoginModule, SocialAuthServiceConfig, GoogleSigninButtonModule} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

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
import {notEqualValidator} from "./components/sell/not-equal.validator";
import { GooglesigninComponent } from './components/googlesignin/googlesignin.component';
import { GooglesignoutComponent } from './components/googlesignout/googlesignout.component';

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
    ExpandedlistingComponent,
    GooglesigninComponent,
    GooglesignoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule,
    GoogleSigninButtonModule
  ],
  providers: [
    ApiService,
    { provide: 'notEqualValidator', useValue: notEqualValidator },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '614628834139-6lon7jgme4ifikrdiggu7hbv5eaeu69k.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
