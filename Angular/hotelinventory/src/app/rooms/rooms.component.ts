import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  SimpleChange,
  ViewChild,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { Element } from '@angular/compiler';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements AfterViewInit {
  hotelName = 'Taj hotel';
  numberOfRooms = 10;

  // @ViewChild("rooms-list")child:RoomsListComponent
  @ViewChild('roomBtn') btn!: ElementRef<any>;

  selecteRoom!: RoomList;
  title = 'Room List';
  hideRooms = false;
  rooms: Room = {
    totalRooms: 15,
    bookedRooms: 5,
    availableRooms: 10,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomtype: 'delux Room',
      amenities: 'Air conditioner',
      photos:
        'https://media.istockphoto.com/id/1369575590/photo/living-room-inderior-with-arch-windows-furnished-with-modern-sofa-and-dining-table-3d-render.jpg?s=612x612&w=is&k=20&c=EAPH4xFM6DtFyIvFXM1ALdzG2WlEsJ_Xcrh68AB3an8=',
      price: 500,
      checkInDate: new Date('11-Nov-2021'),
      checkOutDate: new Date('11-Nov-2021'),
      rating: 4.5,
    },
    {
      roomNumber: 2,
      roomtype: 'delux Room',
      amenities: 'Air conditioner, free wifi',
      photos:
        'https://media.istockphoto.com/id/1369575590/photo/living-room-inderior-with-arch-windows-furnished-with-modern-sofa-and-dining-table-3d-render.jpg?s=612x612&w=is&k=20&c=EAPH4xFM6DtFyIvFXM1ALdzG2WlEsJ_Xcrh68AB3an8=',
      price: 1000,
      checkInDate: new Date('11-Nov-2021'),
      checkOutDate: new Date('11-Nov-2021'),
      rating: 3.0611,
    },
    {
      roomNumber: 3,
      roomtype: 'Private suite',
      amenities: 'Air conditioner, free wifi water',
      photos:
        'https://media.istockphoto.com/id/1369575590/photo/living-room-inderior-with-arch-windows-furnished-with-modern-sofa-and-dining-table-3d-render.jpg?s=612x612&w=is&k=20&c=EAPH4xFM6DtFyIvFXM1ALdzG2WlEsJ_Xcrh68AB3an8=',
      price: 1500,
      checkInDate: new Date('11-Nov-2021'),
      checkOutDate: new Date('11-Nov-2021'),
      rating: 2.8,
    },
  ];

  toggle() {
    console.log(this.title);
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectedRoom(room: RoomList) {
    console.log(room);
    this.selecteRoom = room;
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomtype: 'Private suite',
      amenities: 'Air conditioner, free wifi water',
      photos:
        'https://media.istockphoto.com/id/1369575590/photo/living-room-inderior-with-arch-windows-furnished-with-modern-sofa-and-dining-table-3d-render.jpg?s=612x612&w=is&k=20&c=EAPH4xFM6DtFyIvFXM1ALdzG2WlEsJ_Xcrh68AB3an8=',
      price: 1500,
      checkInDate: new Date('11-Nov-2021'),
      checkOutDate: new Date('11-Nov-2021'),
      rating: 3.5,
    };
    this.roomList.push(room);
  }

  ngAfterViewInit() {
    console.log((this.btn.nativeElement.style.backgroundColor = 'green'));
  }
}
