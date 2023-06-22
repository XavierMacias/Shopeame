import { Component, Input } from '@angular/core';
import { ObservableInput } from 'rxjs';
import { ProductI } from 'src/app/models/interface';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productsList: ProductI[] = [];
  filteredList: ProductI[] = [];

  constructor(private service : ServiceService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((data: any) => { 
      console.log(data); 
      this.productsList = [...data];
      this.filteredList = [...data];
    })
  }

  filter(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
    this.filteredList=this.productsList.filter((product)=> product.name.toLowerCase().includes(input.value.toLowerCase()))
  }

}
