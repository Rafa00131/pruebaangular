import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ProductInterface } from '../../Interface/ProductInterface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  productList: ProductInterface[]=[];
  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.productService.getProducts().subscribe({
      next: (result) =>{
        this.productList = result;
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }
}
