import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../Services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css'],
})
export class RoomsAddComponent {
  successMessagee: string = '';

  room: RoomList = {
    roomtype: '',
    amenities: '',
    checkInDate: new Date(),
    checkOutDate: new Date(),
    photos: '',
    price: 0,
    rating: 0,
  };
  constructor(private roomsService: RoomsService) {}

  AddRoom(roomForm:NgForm) {
    this.roomsService.addRoom(this.room);
    this.successMessagee="Room Added successfully"
    roomForm.resetForm({
      roomtype: '',
    amenities: '',
    checkInDate: new Date(),
    checkOutDate: new Date(),
    photos: '',
    price: 0,
    rating: 0,
    })
  }
}
