import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ItemDetailsComponent } from 'src/app/components/item-details/item-details.component';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { AboutUsComponent } from 'src/app/components/about-us/about-us.component';
import { ContactUsComponent } from 'src/app/components/contact-us/contact-us.component';
import { SearchedContentComponent } from 'src/app/components/searched-content/searched-content.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemDetailsComponent,
    CartComponent,
    AboutUsComponent,
    ContactUsComponent,
    SearchedContentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
