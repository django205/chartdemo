import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HeaderComponent } from './header/header.component';
//import {Chart} from 'chart.js';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
   // Chart
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
