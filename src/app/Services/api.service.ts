import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  getProducts() {
    return this.http.get('https://dummyjson.com/products')
  }
  getLimitedProducts(number: number) {
    return this.http.get(`https://dummyjson.com/products?limit=${number}`)
  }
  getProductByID(id: number) {
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
  addProduct(form: {}) {
    return this.http.post('https://dummyjson.com/products/add', form)
  }
  editProduct(id: number, form: {}) {
    return this.http.put(`https://dummyjson.com/products/${id}`, form)
  }
  deleteProduct(id: number) {
    return this.http.delete(`https://dummyjson.com/products/${id}`)
  }
}
