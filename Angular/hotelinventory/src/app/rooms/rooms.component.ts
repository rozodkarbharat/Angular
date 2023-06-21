import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChange,
  ViewChild,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { Element } from '@angular/compiler';
import { RoomsService } from './Services/rooms.service';
import { DataserviceService } from './Services/dataservice.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements AfterViewInit , OnInit{
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
 roomList:RoomList[]=[]

constructor(private roomsService:RoomsService, private dataserviceService:DataserviceService){

}

ngOnInit(): void {
    this.roomList=this.roomsService.getRooms()
    this.dataserviceService.getData().subscribe((data)=>{
      console.log(data,'Api Fetched')
    })
}

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
    this.roomList.push(room)
  }

  ngAfterViewInit() {
    console.log((this.btn.nativeElement.style.backgroundColor = 'green'));
  }
}
