import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

const routes: Routes = [
  {path:"",redirectTo:'product',pathMatch:'full'},
  {path: "product",component:ProductListComponent},
  {path: "product/add",component:ProductAddComponent},
  {path: "product/:id",component:ProductDetailComponent},
  {path: "product/:id/update",component:ProductUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
