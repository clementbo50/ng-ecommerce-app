import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';


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
export class ProductListComponent implements OnInit {
  
  products: Product[] = [];

  // Emit un événement lorsque le produit est ajouté au panier
  // (Event émis lorsque le produit est ajouté au panier)
  @Output() addProductToCart = new EventEmitter<any>();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  /**
   * Ajoute un produit au panier et émet un événement avec le produit ajouté
   * @param {Product} product - Le produit à ajouter au panier
   */
  handleAddToCart(product: Product) {
     this.addProductToCart.emit(product);
  }
  
  

}

