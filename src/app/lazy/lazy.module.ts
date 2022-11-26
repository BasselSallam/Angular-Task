import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../Components/Products/products/products.component';
import { ProductListComponent } from '../Components/product-list/product-list.component';
import { ProductViewComponent } from '../Components/product-view/product-view.component';
import { AddProductComponent } from '../Components/add-product/add-product.component';
import { UpdateProductComponent } from '../Components/update-product/update-product.component';

const Routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'prdlist', component: ProductListComponent },
  { path: 'product/:prdID', component: ProductViewComponent },
  { path: 'addproduct', component: AddProductComponent },
  { path: 'updateproduct/:prdID', component: UpdateProductComponent }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(Routes),
    CommonModule
  ]
})
export class LazyModule { }
