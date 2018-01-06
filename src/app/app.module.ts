import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SpptService } from './sppt.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListSpptComponent } from './list-sppt/list-sppt.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListSpptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [ 
    SpptService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
