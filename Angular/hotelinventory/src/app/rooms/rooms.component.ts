import { Component } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  hotelName="Taj hotel"
  numberOfRooms=10

  hideRooms=false
  toggle(){
    this.hideRooms=!this.hideRooms
  }
}
