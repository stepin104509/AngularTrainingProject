import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
//import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import{NgApexchartsModule} from 'ng-apexcharts';
//import{MatToolbarModule} from '@angular/material/toolbar';
//import{MatFormFieldModule}from '@angular/material/form-field';
import { MoviesComponent } from './movies/movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import{MatCardModule}from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    ContactUsComponent,
    MoviesComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
   // ChartsModule,
    HttpClientModule,
    //MatToolbarModule,
   // MatFormFieldModule,
   //MatCardModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  //exports:[MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
