import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: `./header.component.html`,
  moduleId:module.id
})
export class headerComponent  {
    logo:string;
    name:string;
    image:string;
    messages:number;
    chat:number;

    constructor(){
      this.logo="logo.png";
      this.name="Arnes Beganovic";
      this.image = "image.jpg";
      this.chat = 6;
      this.messages = 5;
    }
 }