import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, isObservable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  public cartAddedSubject=new Subject<boolean>();
  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>('https://fakestoreapi.com/products');
  }

  addToCart(obj: any) {
    let id = obj.id;
    let data: any[] = [];
    const cartData = localStorage.getItem('cartData');

    if (cartData) {
      try {
        data = JSON.parse(cartData);
      } catch (error) {
        console.error('Error parsing cart data:', error);
      }
    }

    const check = data.filter((item) => item.id === id);
    if (check.length > 0) {
      return false;
    } else {
      data.push(obj);
      let result = localStorage.setItem('cartData', JSON.stringify(data));
      return true;
    }
  }

  getCartItems(){
    const cartData = localStorage.getItem('cartData');
  let parsedData = null;

  if (cartData) {
    try {
      parsedData = JSON.parse(cartData);
    } catch (error) {
      console.error('Error parsing cart data:', error);
    }
  }

  return parsedData || [];
  }
  makeSale(){
    localStorage.removeItem('cartData');
    return []
  }

}
