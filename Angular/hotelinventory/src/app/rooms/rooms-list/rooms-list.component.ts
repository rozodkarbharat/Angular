import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges {

  @Input() title : string=''
  @Input() rooms:RoomList[]=[]
  @Output() selectedRoom= new EventEmitter <RoomList>()

  selectRoom(room:RoomList){
    this.selectedRoom.emit(room)
  }
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log(changes)
    if(changes['title']){

      this.title=changes['title'].currentValue.toUpperCase()
    }
}
}
