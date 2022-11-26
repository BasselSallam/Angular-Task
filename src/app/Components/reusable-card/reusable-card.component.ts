import { Component, Input, OnInit } from '@angular/core';
import { products } from './../../Interfaces/products';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-reusable-card',
  templateUrl: './reusable-card.component.html',
  styleUrls: ['./reusable-card.component.css']
})
export class ReusableCardComponent implements OnInit {
  @Input() dataPassed: products = {
    id: 0,
    brand: '',
    category: '',
    description: '',
    discountPercentage: 0,
    images: [],
    price: 0,
    rating: 0,
    stock: 0,
    thumbnail: '',
    title: ''
  }
  dataConverted: any[] = []

  constructor(private Router: Router , private Api:ApiService) { }

  ngOnInit(): void {

  }
  viewPrd(id: number) {
    this.Router.navigateByUrl(`/product/${id}`)
  }
  edit(id: number) {
    this.Router.navigateByUrl(`/updateproduct/${id}`)
  }
  wipe(id: number) {
    this.Api.deleteProduct(id).subscribe((res)=>{
      console.log(res);
      
    })
  }


}
