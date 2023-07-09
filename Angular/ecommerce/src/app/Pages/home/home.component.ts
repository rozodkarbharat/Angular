import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList:any= [];
  constructor(private productService: ProductService){

  }
product={
  id:0,
  name:"",
  price:0,
  description:""
}
ngOnInit(): void {
  this. loadAllProducts()
}

  loadAllProducts(){
    this.productService.getAllProducts().subscribe({
      next: (v) => this.productList=[...v],
      error: (e) => console.error(e)

    });
    console.log(this.productList)
  }

  addToCart(obj:any){
    let data=this.productService.addToCart(obj)
    if(data){
    alert("Added to cart successfully")
    this.productService.cartAddedSubject.next(true)
    }
    else{
      alert("Product already exists in cart")
    }
  }


  
}
