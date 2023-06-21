import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductI } from 'src/app/models/interface';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  id!: number;
  product!: ProductI;

  constructor(
    private service: ServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    })
    this.service.getProductById(this.id).subscribe((data:any) => {
      this.product = data;
    })
  }

  removeProduct() {
    this.service.deleteProduct(this.id).subscribe((data:any) => {
      alert("producto eliminado");
      this.router.navigate(['products']);
    })
  }

  editProduct(product:ProductI) {
    this.service.editProduct(product);
    this.router.navigate(['gestion']);
  }
}
