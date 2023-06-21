import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public db_url : string = 'http://localhost:3000/products';

  public productData = {
    id: '',
    name: '',
    price: '',
    description: '',
    stars: '',
    image: ''
  };

  constructor(private http : HttpClient) { }

  getProducts() {
    return this.http.get(this.db_url);
  }
  getProductById(id:number) {
    return this.http.get(`${this.db_url}/${id}`);
  }
  postProduct(product: any) {
    return this.http.post(this.db_url, product);
  }
  deleteProduct(id:number) {
    return this.http.delete(`${this.db_url}/${id}`);
  }
}
