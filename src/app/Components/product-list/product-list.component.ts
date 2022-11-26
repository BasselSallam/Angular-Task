import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  prevNumber: number = 0
  nextNumber: number = 0
  pageNumber: number = 1

  constructor() { }

  ngOnInit(): void {
    this.prevNumber = 0
    this.nextNumber = 6
    this.pageNumber = 1

  }
  next() {
    if (this.pageNumber < 5) {
      this.prevNumber += 6
      this.nextNumber += 6
      this.pageNumber += 1

    }

  }
  prev() {
    if (this.pageNumber > 1) {
      this.prevNumber -= 6
      this.nextNumber -= 6
      this.pageNumber -= 1
    }

  }
  page(num: number) {
    if (!(num == 0 || num == 6)) {
      this.prevNumber = (6 * num) - 6
      this.nextNumber = 6 * num
      this.pageNumber = num
    }
  }
}
