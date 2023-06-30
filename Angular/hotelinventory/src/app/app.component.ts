import { Component, Inject, OnInit } from '@angular/core';
import { localSrtorageToken } from './localstorage.token';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hotelinventory';

  constructor(@Inject(localSrtorageToken) private localStorage: Storage, private router:Router) {}
  ngOnInit() {
    this.router.events.subscribe(event=>console.log(event))
    this.localStorage.setItem('name', 'Hilton Hotel');



    this.router.events.pipe(filter(event=>event instanceof NavigationStart)).subscribe(event=>console.log('Navigation Started'))
    this.router.events.pipe(filter(event=>event instanceof NavigationEnd)).subscribe(event=>console.log('Navigation End'))
  }
}
