import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: any[] = []
  @Input() prevDataPassed: number = 0
  @Input() nextDataPassed: number = 6


  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => {
      this.productList = Object.values(res)
    })
  }
}
