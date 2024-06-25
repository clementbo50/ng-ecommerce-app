import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CartComponent {
  @Input() cartItems!: any[];
 

/* Méthode pour supprimer un produit du panier */
removeFromCart(product: any) {
  const productIndex = this.cartItems.findIndex(item => item.title === product.title);

  if (productIndex > -1) {
    this.cartItems[productIndex].quantity -= 1;
    if (this.cartItems[productIndex].quantity === 0) {
      this.cartItems.splice(productIndex, 1);
    }
  }
}

/* Calcul du prix total du panier */
get totalPrice(): number {
  return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
}
  
}
