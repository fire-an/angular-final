import { Component } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products!: any
  constructor(private productService: ProductService){
    this.productService.getProduct().subscribe((data)=>{
      this.products= data
    })
  }
  deleteProduct(id:any){
    this.productService.deleteProduct(id).subscribe(()=>{
      alert("Xóa thành công")
      location.reload
    })
  } 
}
