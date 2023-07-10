import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
})
export class SaleComponent implements OnInit {
  CartItems: any[] = [];
  subTotal: number = 0;
  constructor(private productService: ProductService,private cdr: ChangeDetectorRef,private router:Router) {}

  loadCart() {
    let data = this.productService.getCartItems();

    this.CartItems = [...data];
    this.CartItems.forEach((item, index) => {
      this.subTotal += item.price;
    });
  }
  ngOnInit(): void {
    this.loadCart();
  }

  makeSale(){
   this.productService.makeSale()
   this.loadCart()
   this.productService.cartAddedSubject.next(true)
   this.subTotal=0
   alert("Order placed successfully")
    this.router.navigateByUrl('/')
  }
  RemoveItem(id: number){
    let data=this.CartItems.filter(item => item.id!==id);
    localStorage.setItem('cartData', JSON.stringify(data))
    this.loadCart()
    this.productService.cartAddedSubject.next(true)
  }

}
