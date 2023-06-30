import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomGuard } from '../guards/room.guard';
import { loadGuard } from '../guards/load.guard';

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    canActivateChild:[RoomGuard],
    canMatch:[loadGuard],
    children: [
      {
        path: ':id',
        component: RoomsBookingComponent,
      },
    ],
  },
  {
    path: 'rooms/add',
    component: RoomsAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
