import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {
  productForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService,
    private router: Router){}

  public newProduct = this.service.productData;
  public avengerId = this.service.productData.id;

  ngOnInit() : void {
    this.productForm = this.formBuilder.group({
      name: [this.newProduct.name, [Validators.required]],
      price: [this.newProduct.price, [Validators.required]],
      description: [this.newProduct.description, [Validators.required]],
      stars: [this.newProduct.stars, [Validators.required]],
      image: [this.newProduct.image, [Validators.required]],
    });

    this.productForm.valueChanges.subscribe((changes) => {
      this.newProduct = changes;
    })

  }

  onSubmit() {
    console.log(this.newProduct);
    this.service.postProduct(this.newProduct).subscribe();
    alert('producto creado');
    this.router.navigate(['products']);
    this.productForm.reset();
  }
}
