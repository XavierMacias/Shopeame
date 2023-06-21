import { Component } from '@angular/core';
import { ProductI } from 'src/app/models/interface';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productsList: ProductI[] = [];

  constructor(private service : ServiceService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((data: any) => { 
      console.log(data); 
      this.productsList = [...data];
    })
  }

}
