import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ApiURL: string= "https://fakestoreapi.com/products"
  constructor(private httpClient: HttpClient) { }
  getProducts(): Observable<any>{
    return this.httpClient.get(this.ApiURL).pipe(res=>res);
  } 
}
