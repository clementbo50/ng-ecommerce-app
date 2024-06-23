import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HighlightAddedDirective } from '../highlight-added-directive.directive';

/**
 * Composant représentant un produit.
 */
@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    CurrencyPipe,
    HighlightAddedDirective
  ],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  /** URL de l'image du produit. */
  @Input() imageUrl!: string;
  /** Titre du produit. */
  @Input() title!: string;
  /** Description du produit. */
  @Input() description!: string;
  /** Prix du produit. */
  @Input() price!: number;
  /** Événement émis lorsque le produit est ajouté au panier. */
  @Output() add = new EventEmitter<void>();

  isAddedToCart: boolean = false;

  /**
   * Ajoute le produit au panier.
   */

  ngOnInit(): void {
    console.log(`ProductItemComponent pour ${this.title} a été initialisé`);
  }
  addToCart() {
    this.isAddedToCart = true;
    this.add.emit();
  }
}

