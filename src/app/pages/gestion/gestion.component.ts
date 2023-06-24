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
  submitted: boolean = false;
  action:string = "Creación";
  overlay:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService,
    private router: Router){}

  public newProduct = this.service.productData;
  public productId = this.service.productData.id;

  ngOnInit() : void {
    this.productForm = this.formBuilder.group({
      name: [this.newProduct.name, [Validators.required]],
      price: [this.newProduct.price, [Validators.required, Validators.min(0)]],
      description: [this.newProduct.description, [Validators.required]],
      stars: [this.newProduct.stars, [Validators.required, Validators.min(1), Validators.max(5),Validators.pattern("^[0-5]*$")]],
      image: [this.newProduct.image, [Validators.required]],
    });

    this.productForm.valueChanges.subscribe((changes) => {
      this.newProduct = changes;
    })

    if(this.productId !== '') {
      this.action = "Edición";
    }
  }

  ngOnDestroy() : void {
    this.submitted = false;
    this.service.resetProductData();
  }

  onSubmit() {
    this.submitted = true;
    if(this.productForm.valid) {
      if(this.productId !== '') {
        this.service.putAvenger(this.productId,this.newProduct).subscribe();
        this.submitted = false;
        //alert('producto editado');
      } else {
        this.service.postProduct(this.newProduct).subscribe();
        this.submitted = false;
        //alert('producto creado');
      }
      
      this.productForm.reset();
      this.overlay = true;
      //this.router.navigate(['products']);
    }
    
  }

  ok() {
    this.router.navigate(['products']);
  }
}
