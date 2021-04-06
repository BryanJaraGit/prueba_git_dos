import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage {
  currentCenter : any;
  coordinates : any [] = [];
  defaultZoom = 14;

//  lat = 51.678418;
//  lng = 7.809007;
ionViewDidEnter(){
  this.getCurrentPosition();
  this.watchPosition();
}
async getCurrentPosition(){
  const coordinates = await Geolocation.getCurrentPosition();
  this.currentCenter = {
    lat: coordinates.coords.latitude,
    long: coordinates.coords.longitude
  }
}

watchPosition(){
  Geolocation.watchPosition({}, position=>{
    this.currentCenter = {
      lat: position.coords.latitude,
      long: position.coords.longitude
    }
  });
}
constructor() { }

  ngOnInit() {
  }

}
