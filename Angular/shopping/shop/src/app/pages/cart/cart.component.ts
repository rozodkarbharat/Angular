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
      {
        product: "http://via.placeholder.com/150",
        name: "sneakers",
        price: 150,
        quantity: 3,
        id: 2,
      },
    ],
  };
  dataSource: Array<cartItem> = [];
  displayedColumns: Array<string> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];
  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(item: Array<cartItem>): number {
    return item
      .map((item: cartItem) => item.price * item.quantity)
      .reduce((prev, cur) => prev + cur, 0);
  }
}
