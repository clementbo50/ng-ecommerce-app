import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


/**
 * Composant représentant un produit.
 */
@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    CurrencyPipe,
    
  ],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() imageUrl!: string; // Reçoit l'URL de l'image du produit
  @Input() title!: string; // Reçoit le titre du produit
  @Input() description!: string; // Reçoit la description du produit
  @Input() price!: number; // Reçoit le prix du produit

  @Output() add = new EventEmitter<any>(); // Émet un événement lorsqu'un produit est ajouté au panier

  //isAddedToCart: boolean = false;

 
  ngOnInit(): void {
    console.log(`ProductItemComponent pour ${this.title} a été initialisé`);
  }
  addToCart() {
    //this.isAddedToCart = true;
    this.add.emit({
      // Crée un objet produit et émet cet objet
      imageUrl: this.imageUrl,
      title: this.title,
      description: this.description,
      price: this.price
      
    });
    
  }
}

