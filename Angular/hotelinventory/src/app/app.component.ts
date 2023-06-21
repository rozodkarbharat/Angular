import { Component, Inject, OnInit } from '@angular/core';
import {localSrtorageToken} from './localstorage.token'
@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hotelinventory';

  constructor(@Inject (localSrtorageToken) private localStorage:Storage){

  }
  ngOnInit  (){
    this.localStorage.setItem("name",'Hilton Hotel')
  }
}
