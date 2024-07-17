export class Product {
    id!: number;
    imageUrl!: string;
    title!: string;
    description!: string;
    price!: number;
  }
  
  export class CartItem extends Product {
    quantity!: number;
  }
  