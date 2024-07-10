import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { imageUrl: 'https://picsum.photos/200/300', title: 'Produit 1', description: 'Description de Produit 1', price: 10 },
    { imageUrl: 'https://picsum.photos/200/300?grayscale', title: 'Produit 2', description: 'Description de Produit 2', price: 20 },
    { imageUrl: 'https://picsum.photos/200/300?blur=2', title: 'Produit 3', description: 'Description de Produit 3', price: 30 },
    { imageUrl: 'https://picsum.photos/200/300?blur=4', title: 'Produit 4', description: 'Description de Produit 4', price: 40 },
    { imageUrl: 'https://picsum.photos/200/300?blur=8', title: 'Produit 5', description: 'Description de Produit 5', price: 50 },
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }

  // Autres méthodes liées aux produits à venir ...
}
