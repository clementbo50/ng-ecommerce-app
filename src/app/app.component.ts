import { CartComponent } from './cart/cart.component';
//fichier app.component.ts
import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductListComponent,
    CartComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}

