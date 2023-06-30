import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingForm!:FormGroup;
  constructor(private fb:FormBuilder){}

  ngOnInit():void {
    this.bookingForm = this.fb.group({
      roomId: [''],
      guestEmail: [''],
      guestName:  [''],
      checkOutDate: [''],
      checkInDate: [''],
      mobileNumber: [''],
      guesAdress: [''],
      bookingAmount: [''],
      bookingStatus: [''],
      bookingDate: ['']
    })
  }
}

export class Booking{

  roomId: string;
  guestEmail: string;
  guestName: string;
  checkOutDate:Date;
  checkInDate:Date;
  mobileNumber:string;
  guesAdress:string;
  bookingAmount:number;
  bookingStatus:string;
  bookingDate:Date;
  guestList:Guest[]

 }
