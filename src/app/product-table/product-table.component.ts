// product-table.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [
    CurrencyPipe,
    CommonModule,
    UpdateProductComponent,
  ],
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
/**
 * Composant pour afficher une table de produits.
 */
export class ProductTableComponent implements OnInit {
  
  products$!: Observable<Product[]>



  /**
   * Constructeur.
   * @param productService Le service de gestion des produits.
   * @param router Le router de l'application.
   */
  constructor(private productService: ProductService, private router: Router, private authService: AuthService) {}

  /**
   * Initialise le composant.
   */
  ngOnInit(): void {
    const userId = this.authService.getUserId();
    this.products$ = this.productService.getProductsByUserId(userId);
  }

  
  /**
   * Supprime un produit.
   * @param product Le produit à supprimer.
   */
  removeProduct(product: Product) {
    // Supprime le produit via le service de gestion des produits
    // et met à jour la liste des produits affichés
    this.productService.removeProduct(product.id).subscribe(
      () => {
        this.products$ = this.products$.pipe(
          map(products => products.filter(p => p.id !== product.id))
          
        );
      }
    );
  }
  
  

  /**
   * Redirige vers la page de mise à jour d'un produit.
   * @param product Le produit à mettre à jour.
   */
  updateProduct(product: Product) {
    this.router.navigate(['/update-product', product.id]);
  }
}
