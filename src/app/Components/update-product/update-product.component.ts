import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/Interfaces/products';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id: string = ''
  discountPercentage = 0
  price = 0
  brand = ''
  title = ''
  thumbnail = ''
  description = ''
  product: any
  constructor(private ActivatedRoute: ActivatedRoute, private Api: ApiService) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe(url => {
      this.id = url.get('prdID') ? (url.get('prdID')) as string : ''
    })
    this.Api.getProductByID(Number(this.id)).subscribe((res) => {
      this.product = res
      this.discountPercentage = this.product.discountPercentage
      this.price = this.product.price
      this.title = this.product.title
      this.brand = this.product.brand
      this.thumbnail = this.product.thumbnail
      this.description = this.product.description
    })
  }

  onSubmit(form: any) {
    console.log('form', form.value);

    this.Api.editProduct(Number(this.id), form.value).subscribe((res) => {
      console.log(res);

    })
  }

}
