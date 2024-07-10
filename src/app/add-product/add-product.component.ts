import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {

  productForm!: FormGroup;
  urlRegex!: RegExp;

  constructor( private fb: FormBuilder, private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
    this.productForm = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(5)]],
      description: [null, [Validators.required, Validators.minLength(5)]],
      price: [null, [Validators.required, Validators.min(0.01)]],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]]
    });
  }

  addProduct() {

    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value);
      this.productForm.reset();
      this.router.navigate(['/boutique']);
    }
    
  }

}
