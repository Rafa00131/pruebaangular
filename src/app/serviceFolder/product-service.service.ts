import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  ApiURL: string = 'https://fakestoreapi.com/products';
  constructor(private httpClient: HttpClient) { }
  getProducts() {
    return this.httpClient.get(this.ApiURL);
  }
  getProduct() {
    
  }
}
