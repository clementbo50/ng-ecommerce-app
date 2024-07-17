import { Routes } from '@angular/router';
import { ProductsCartComponent } from './products-cart/products-cart.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { UpdateProductComponent } from './update-product/update-product.component';

export const routes: Routes = [
    { path: 'boutique', component: ProductsCartComponent },
    { path: 'add-product', component: AddProductComponent },
    { path: 'my-products', component: ProductTableComponent},
    { path: 'update-product/:id', component: UpdateProductComponent },
    { path: '', redirectTo: 'boutique', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
