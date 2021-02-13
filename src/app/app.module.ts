import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MapsComponent } from './components/maps/maps.component';
import { HttpClientModule } from '@angular/common/http';
import { MapService } from './services/map.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    MapsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
