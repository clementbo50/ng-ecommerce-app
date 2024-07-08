/**
 * Fichier app.component.ts
 * Composant racine de l'application
 */
import { CartComponent } from './cart/cart.component';
import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductListComponent,
    CartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * Liste des articles achetés
   */
  

  constructor(private cartService: CartService) {}


  /**
   * Ajoute un produit au panier
   * @param {any} product - Le produit à ajouter
   */
  addProductToCart(product: any) {
    this.cartService.addProduct(product);
    console.log()
  }

}


