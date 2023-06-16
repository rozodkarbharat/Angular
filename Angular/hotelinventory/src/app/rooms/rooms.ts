export interface Room{
  totalRooms?:number;
  availableRooms?:number;
  bookedRooms?:number;
}

export interface RoomList{
  roomNumber:number;
  roomtype:string;
  amenities:string;
  photos:string;
  price:number
  checkInDate:Date;
  checkOutDate:Date;
  rating:number
}
