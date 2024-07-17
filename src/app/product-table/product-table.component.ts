// product-table.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { UpdateProductComponent } from '../update-product/update-product.component';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [
    CurrencyPipe,
    CommonModule,
    UpdateProductComponent
  ],
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
/**
 * Composant pour afficher une table de produits.
 */
export class ProductTableComponent implements OnInit {
  // Liste de produits
  products: Product[] = [];
  // Produit à mettre à jour (ou null)
  productToUpdate: Product | null = null;

  /**
   * Constructeur.
   * @param productService Le service de gestion des produits.
   * @param router Le router de l'application.
   */
  constructor(private productService: ProductService, private router: Router) {}

  /**
   * Initialise le composant.
   */
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  /**
   * Supprime un produit.
   * @param product Le produit à supprimer.
   */
  removeProduct(product: Product) {
    this.productService.removeProduct(product);
    
  }

  /**
   * Redirige vers la page de mise à jour d'un produit.
   * @param product Le produit à mettre à jour.
   */
  updateProduct(product: Product) {
    this.router.navigate(['/update-product', product.id]);
  }
}
