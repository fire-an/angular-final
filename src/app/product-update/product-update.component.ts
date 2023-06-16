import { Component,OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, FormControl} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product!:any;
  productForm!: FormGroup;
  constructor(private route: ActivatedRoute,private productService: ProductService){}
  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      desc: new FormControl()
    })

    this.route.paramMap.subscribe((params)=>{
      const id = params.get('id');
      console.log
      if(id){
        this.productService.getProductByID(id).subscribe((data)=>{
          this.product=data
          this.productForm.patchValue({
            name: this.product.name,
            price: this.product.price,
            desc: this.product.desc
          })
        })
      }
    })
  }

  onHandleSubmit(){
    const product = {
      ...this.product,
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      desc: this.productForm.value.desc
    }
    console.log("aaaa")

    this.productService.updateProduct(product).subscribe(()=>{
      alert("Update thành công")
    },(error)=>{
      alert(`$(error.message`)
    })
  }
}
