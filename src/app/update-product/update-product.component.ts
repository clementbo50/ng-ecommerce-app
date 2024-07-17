import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit {

  product!: Product | undefined;
  updateForm!: FormGroup;
  urlRegex!: RegExp;


  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

     const productId = Number(this.route.snapshot.paramMap.get('id'));
     this.product = this.productService.getProductById(productId);

   

      if(this.product) {
        this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
        this.updateForm = this.fb.group({
          
          title: [this.product.title, [Validators.required, Validators.minLength(5)]],
          description: [this.product.description, [Validators.required, Validators.minLength(5)]],
          price: [this.product.price, [Validators.required, Validators.min(0.01)]],
          imageUrl: [this.product.imageUrl, [Validators.required, Validators.pattern(this.urlRegex)]]
        });
      } else {
        // Si le produit n'existe pas on redirige vers la page des produits
        this.router.navigate(['/my-products']);
      }
    
  }

  updateProduct() {
    if (this.updateForm.valid) {
      const updatedProduct = {
        ...this.product,
        ...this.updateForm.value
      };
      console.table(updatedProduct);
      console.table(this.product);
      this.productService.updateProduct(updatedProduct);
      this.router.navigate(['/my-products']);
    }
  }


}
