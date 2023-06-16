import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API = 'http://localhost:3000/products'
  constructor(public http: HttpClient) { }
  getProduct(){
    return this.http.get(`${this.API}`)
  }
  getProductByID(id:any){
    return this.http.get(`${this.API}/${id}`)
  }
  deleteProduct(id:any){
    return this.http.delete(`${this.API}/${id}`)
  }
  addProduct(product:any){
    return this.http.post(`${this.API}`,product)
  }
  updateProduct(product:any){
    return this.http.patch(`${this.API}/${product.id}`,product)
  }
}
