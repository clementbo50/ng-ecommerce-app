/**
 * Fichier app.component.ts
 * Composant racine de l'application
 */
import { CartComponent } from './cart/cart.component';
import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { CartService } from './services/cart.service';
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
}


