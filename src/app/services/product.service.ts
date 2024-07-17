import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, imageUrl: 'https://picsum.photos/200/300', title: 'Produit 1', description: 'Description de Produit 1', price: 10 },
    { id: 2, imageUrl: 'https://picsum.photos/200/300?grayscale', title: 'Produit 2', description: 'Description de Produit 2', price: 20 },
    { id: 3, imageUrl: 'https://picsum.photos/200/300?blur=2', title: 'Produit 3', description: 'Description de Produit 3', price: 30 },
    { id: 4, imageUrl: 'https://picsum.photos/200/300?blur=4', title: 'Produit 4', description: 'Description de Produit 4', price: 40 },
    { id: 5, imageUrl: 'https://picsum.photos/200/300?blur=8', title: 'Produit 5', description: 'Description de Produit 5', price: 50 },
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    product.id = this.products.length + 1;
    this.products.push(product);
  }

 
  /**
   * Supprime un produit de la liste des produits.
   * @param product Le produit à supprimer.
   */
  removeProduct(product: Product) {
    // Chercher l'index du produit à supprimer
    const index = this.products.indexOf(product);
    // Supprimer le produit à l'index trouvé
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  /**
   * Met à jour un produit de la liste des produits.
   * @param product Le produit à mettre à jour.
   */
  updateProduct(product: Product) {
    // Chercher l'index du produit à mettre à jour
    const index = this.products.findIndex(p => p.id === product.id);
    // Mettre à jour le produit à l'index trouvé
    if (index > -1) {
      this.products[index] = product;
    }
  }

  /**
   * Renvoie le produit ayant l'id spécifié, ou undefined si aucun produit n'a été trouvé.
   * @param id L'identifiant du produit à chercher.
   * @returns Le produit correspondant à l'id spécifié, ou undefined.
   */
  getProductById(id: number): Product | undefined {
    // Chercher le produit ayant l'id spécifié
    return this.products.find(product => product.id === id);
  }
}
