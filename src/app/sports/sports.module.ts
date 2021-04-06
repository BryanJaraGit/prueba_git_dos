import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportsPageRoutingModule } from './sports-routing.module';

import { SportsPage } from './sports.page';
import { AgmCoreModule } from '@agm/core';
import { Plugins } from '@capacitor/core';
//const  { Geolocation } = Plugins;
const Geolocation = Plugins.Geolocation;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportsPageRoutingModule,
    AgmCoreModule
  ],
  declarations: [SportsPage]
})
export class SportsPageModule {}
