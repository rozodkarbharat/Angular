import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent {
  id:number=0
  constructor(private router:ActivatedRoute){}

  id$ =this.router.paramMap.pipe(map((params)=>params.get('id')))


ngOnInit(): void{


}
}
