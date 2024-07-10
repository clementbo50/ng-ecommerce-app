// cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {}

  addProduct(product: any) {
    const existingProduct = this.cartItems.find(item => item.title === product.title);

    if (existingProduct) {
      existingProduct.quantity += 1;
      
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
      
    }
    console.log(this.cartItems);
  }

  removeProduct(product: any) {
    const productIndex = this.cartItems.findIndex(item => item.title === product.title);

    if (productIndex > -1) {
      this.cartItems[productIndex].quantity -= 1;
      if (this.cartItems[productIndex].quantity === 0) {
        this.cartItems.splice(productIndex, 1);
      }
    }
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getCartItems(): any[] {
    return this.cartItems;
  }
}
