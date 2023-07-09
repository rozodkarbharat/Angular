import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ecommerce';
  CartItems: any[] = [];
  subTotal:number = 0;
  constructor(private productService: ProductService,private router: Router) {
    this.productService.cartAddedSubject.subscribe((res) => {
      this.loadCart()
    });
  }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    let data = this.productService.getCartItems();

    this.CartItems = [...data];
    this.CartItems.forEach((item, index) =>{this.subTotal+=item.price})
    console.log(this.subTotal,'subtotal')
  }

  redirectToSale(){
    this.router.navigateByUrl('sale');
  }

}
