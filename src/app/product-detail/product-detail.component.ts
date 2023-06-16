import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product!:any
  constructor(private route: ActivatedRoute,private productService: ProductService){
    this.route.paramMap.subscribe((param)=>{
      const id= param.get('id')
      this.productService.getProductByID(id).subscribe((data)=>{
        this.product=data
      })
    })
  }
}
