/**
 * Fichier app.component.ts
 * Composant racine de l'application
 */

import { Component } from '@angular/core';
<<<<<<< Updated upstream
import { ProductListComponent } from './product-list/product-list.component';
=======
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
>>>>>>> Stashed changes


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
<<<<<<< Updated upstream
    ProductListComponent,
    CartComponent,
  ],
=======
    NavbarComponent,
    RouterOutlet,
  
],
>>>>>>> Stashed changes
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * Liste des articles achetés
   */
  cartItems: any[] = [];

  /**
   * Ajoute un produit au panier et émet un événement avec le produit ajouté
   * @param {any} product - Le produit à ajouter au panier
   */
  addProductToCart(product: any) {
    const existingProduct = this.cartItems.find(item => item.title === product.title);

    if (existingProduct) {
      // Si le produit est déjà dans le panier, augmenter la quantité
      existingProduct.quantity += 1;
    } else {
      // Si le produit n'est pas dans le panier, l'ajouter avec une quantité de 1
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

}


