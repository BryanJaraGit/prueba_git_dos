import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import { Plugins } from '@capacitor/core';
const  { Geolocation } = Plugins;
//const Geolocation = Plugins.Geolocation;
 
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage {
  mapaForm: FormGroup;
  currentCenter : any;   //actual
  coordinates : any [] = [];  //vector
  defaultZoom = 8;            //zoom
  latitud: any;
  longitud: any;
  latitudFinal: any;
  longitudFinal: any;
  
  
  constructor(/*private formBuilder: FormBuilder*/) { 
   /* this.mapaForm = this.formBuilder.group(
      {
        longitud: new FormControl("",Validators.compose([
          Validators.required,Validators.email
        ])),
        latitud: new FormControl("",Validators.compose([
          Validators.required, Validators.minLength(8)
        ]))
      }
    );*/
  }
 
  
  ionViewDidEnter(){
    this.getCurrentPosition();
    this.watchPosition();
  }
 
  async getCurrentPosition(){
    const coordinates = await Geolocation.getCurrentPosition();
    this.currentCenter = {

      //lat: this.latitud,
      //long: this.longitud
      lat: coordinates.coords.latitude,
      long: coordinates.coords.longitude
    }
  }
 
  watchPosition(){
    Geolocation.watchPosition({}, position=>{
      this.currentCenter = {
        lat: position.coords.latitude,
        long: position.coords.longitude
      };
  
      this.coordinates.push(
        {
         lat: position.coords.latitude,
         long: position.coords.longitude
       });
  });
}  
}