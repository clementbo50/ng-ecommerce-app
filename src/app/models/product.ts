export class Product {
    id!: number;
    imageUrl!: string;
    title!: string;
    description!: string;
    price!: number;
    hidden?: boolean;
  }
  
  export class CartItem extends Product {
    quantity!: number;
  }
  