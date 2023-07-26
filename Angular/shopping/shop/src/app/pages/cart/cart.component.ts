import { Component, OnInit } from "@angular/core";
import { Cart, cartItem } from "src/app/models/cart.model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: "http://via.placeholder.com/150",
        name: "sneakers",
        price: 150,
        quantity: 1,
        id: 1,
      },
    ],
  };
  dataSource: Array<cartItem> = [];
  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }
}
