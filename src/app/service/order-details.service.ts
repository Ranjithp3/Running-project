import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  fooddetail=
  [
    {
      id:1,
      foodName:"Panner grilled sandwich",
      foodDetails:"panner-fried masala panner",
      foodPrice:369,
      foodImage:"http://codeskulptor-assets.commondatastorage.googleapis.com/assets_clock_background.png"
    },
    {
      id:2,
      foodName:"Panner masala",
      foodDetails:"panner-fried masala panner",
      foodPrice:399,
      foodImage:"http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_brown.png",
    },
    {
      id:3,
      foodName:"Panner sandwich",
      foodDetails:"panner-fried masala panner",
      foodPrice:469,
      foodImage:"http://commondatastorage.googleapis.com/codeskulptor-assets/space%20station.png",
    },
    {
      id:4,
      foodName:"Grilled sandwich",
      foodDetails:"panner-fried masala panner",
      foodPrice:669,
      foodImage:"http://commondatastorage.googleapis.com/codeskulptor-assets/data_clustering/USA_Counties.png"
    },
    {
      id:5,
      foodName:"Grilled Chiken",
      foodDetails:"panner-fried masala panner",
      foodPrice:365,
      foodImage:"http://commondatastorage.googleapis.com/codeskulptor-assets/explosion.hasgraphics.png"
    },
    {
      id:6,
      foodName:"Spinach sandwich",
      foodDetails:"panner-fried masala panner",
      foodPrice:864,
      foodImage:"http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_2_2.png"
    }
  ]
}
