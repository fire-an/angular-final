import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms'
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  productForm = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    desc: new FormControl()
  })
  constructor(private productService: ProductService){}
  onHandleSubmit(){
    const product = {
      id:'',
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      desc: this.productForm.value.desc
    }
    console.log("aaaa")

    this.productService.addProduct(product).subscribe(()=>{
      alert("Thêm thành công")
    },(error)=>{
      alert(`$(error.message`)
    })
  }
}
