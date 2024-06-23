import { Component, Input } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';


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
  products = [
    { imageUrl: 'https://picsum.photos/200/300', title: 'Product 1', description: 'Description of product 1', price: 10 },
    { imageUrl: 'https://picsum.photos/200/300?grayscale', title: 'Product 2', description: 'Description of product 2', price: 20 },
    { imageUrl: 'https://picsum.photos/200/300?blur=2', title: 'Product 3', description: 'Description of product 3', price: 30 },
  ];
  
  list: string = 'Hello World!';

}
