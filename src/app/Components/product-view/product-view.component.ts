import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from './../../Interfaces/products';
import { ApiService } from 'src/app/Services/api.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit, OnDestroy {
  product: any
  id = ""
  imgView = ""
  apiCall!: Subscription
  constructor(private ActivatedRoute: ActivatedRoute, private Api: ApiService) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe(url => {
      this.id = url.get('prdID') ? (url.get('prdID')) as string : ''
    })
    this.apiCall = this.Api.getProductByID(Number(this.id)).subscribe((res) => {
      this.product = res
      console.log(this.product);
      this.imgView = this.product.thumbnail

    })
  }
  changeImage(image: string) {
    this.imgView = image
  }
  ngOnDestroy(): void {
    this.apiCall.unsubscribe()
  }

}
