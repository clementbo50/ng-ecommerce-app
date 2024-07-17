import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< Updated upstream
=======
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/product';
>>>>>>> Stashed changes


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CartComponent {
<<<<<<< Updated upstream
  @Input() cartItems!: any[];
 
=======
  cartItems: CartItem[] = [];
>>>>>>> Stashed changes

/* Méthode pour supprimer un produit du panier */
<<<<<<< Updated upstream
removeFromCart(product: any) {
  const productIndex = this.cartItems.findIndex(item => item.title === product.title);

  if (productIndex > -1) {
    this.cartItems[productIndex].quantity -= 1;
    if (this.cartItems[productIndex].quantity === 0) {
      this.cartItems.splice(productIndex, 1);
    }
  }
=======
removeFromCart(product: CartItem) {
  this.cartService.removeProduct(product);
  
>>>>>>> Stashed changes
}

/* Calcul du prix total du panier */
get totalPrice(): number {
  return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
}
  
}
