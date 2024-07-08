import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
    
  }
  
/* Méthode pour supprimer un produit du panier */
removeFromCart(product: any) {
  this.cartService.removeProduct(product);
  
}

/* Calcul du prix total du panier */
get totalPrice(): number {
  return this.cartService.getTotalPrice();
}
  
}
