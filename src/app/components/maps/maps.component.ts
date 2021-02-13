
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MapService } from 'src/app/services/map.service';

declare const L: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {
  latlong: any = []

  constructor(private mapService:MapService) {}

  ngOnInit(): void {

    this.coordinate()


    if (!navigator.geolocation) {
      console.log('excuse me our system cant detect your location');
    }
    navigator.geolocation.getCurrentPosition((possition) => {
      let coords = possition.coords;
      this.latlong = `this your coordinate, latitude ${possition.coords.latitude} and this longitude ${possition.coords.longitude}`;
      console.log(``);

      let mymap = L.map('mapid').setView(
        [coords.latitude, -coords.longitude],
        13
      );

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mymap);
      
      L.marker([coords.latitude, coords.longitude]).addTo(mymap)
    .bindPopup('this my position coordinate now')
    .openPopup();
    });
  }
  
  coordinate(): void {
    this.mapService.getMap().subscribe((data: any) => {
      this.latlong = data
      console.log(this.latlong);
    });
  }

}
