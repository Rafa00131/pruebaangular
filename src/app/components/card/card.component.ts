import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductInterface } from '../../Interface/ProductInterface';
import { ProductService } from '../../Services/product.service';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
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

