import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-products-cart',
  standalone: true,
  imports: [
    ProductListComponent,
    CartComponent
  ],
  templateUrl: './products-cart.component.html',
  styleUrl: './products-cart.component.css'
})
export class ProductsCartComponent {
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
