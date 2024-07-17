import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';
<<<<<<< Updated upstream
=======
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
>>>>>>> Stashed changes


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductItemComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  
<<<<<<< Updated upstream
  products = [
    { imageUrl: 'https://picsum.photos/200/300', title: 'Produit 1', description: 'Description de Produit 1', price: 10 },
    { imageUrl: 'https://picsum.photos/200/300?grayscale', title: 'Produit 2', description: 'Description de Produit 2', price: 20 },
    { imageUrl: 'https://picsum.photos/200/300?blur=2', title: 'Produit 3', description: 'Description de Produit 3', price: 30 },
    { imageUrl: 'https://picsum.photos/200/300?blur=4', title: 'Produit 4', description: 'Description de Produit 4', price: 40 },
    { imageUrl: 'https://picsum.photos/200/300?blur=8', title: 'Produit 5', description: 'Description de Produit 5', price: 50 },
    
  ];
=======
  products: Product[] = [];
>>>>>>> Stashed changes

  // Emit un événement lorsque le produit est ajouté au panier
  // (Event émis lorsque le produit est ajouté au panier)
  @Output() addProductToCart = new EventEmitter<any>();


  
  /**
   * Ajoute un produit au panier et émet un événement avec le produit ajouté
   * @param {Product} product - Le produit à ajouter au panier
   */
  handleAddToCart(product: Product) {
     this.addProductToCart.emit(product);
  }
  
  

}

