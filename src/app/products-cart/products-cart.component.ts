import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { CartComponent } from '../cart/cart.component';
import { CartItem } from '../models/product';



@Component({
  selector: 'app-products-cart',
  standalone: true,
  imports: [
    ProductListComponent,
    CartComponent,

  ],
  templateUrl: './products-cart.component.html',
  styleUrl: './products-cart.component.css'
})
export class ProductsCartComponent {
  constructor(private cartService: CartService) {}


  /**
   * Ajoute un produit au panier
   * @param {CartItem} product - Le produit à ajouter
   */
  addProductToCart(product: CartItem) {
    this.cartService.addProduct(product);
 
  }

  
}
