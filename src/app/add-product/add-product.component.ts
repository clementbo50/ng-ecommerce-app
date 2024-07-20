import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { map, startWith, Observable, tap } from 'rxjs';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AsyncPipe
  ],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm!: FormGroup;
  urlRegex!: RegExp;
  productPreview$!: Observable<Product>;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
    this.productForm = this.fb.group({
      title: ['Titre par défaut', [Validators.required, Validators.minLength(5)]],
      description: ['Description par défaut', [Validators.required, Validators.minLength(5)]],
      price: [0.10, [Validators.required, Validators.min(0.01)]],
      imageUrl: ['https://via.placeholder.com/150', [Validators.required, Validators.pattern(this.urlRegex)]]
    }, { updateOn: 'change' });

    this.productPreview$ = this.productForm.valueChanges.pipe(
      startWith(this.productForm.value),
      tap(() => console.log(this.productForm.value)),
      
    );
  }

  addProduct() {
    // Vérifie si le formulaire est valide
    if (this.productForm.valid) {
      // Appelle le service pour ajouter un produit en passant les valeurs du formulaire
      this.productService.addProduct(this.productForm.value).pipe(
        // Réinitialise le formulaire après l'ajout du produit
        tap(() => this.productForm.reset()),
        // Redirige l'utilisateur vers la page 'boutique' après l'ajout du produit
        tap(() => this.router.navigate(['/boutique'])),
      ).subscribe(); // S'abonne pour déclencher la chaîne d'observables
    } else {
      // Redirige vers la page 'add-product' si le formulaire n'est pas valide
      this.router.navigate(['/add-product']);
    }
  }
  
}
