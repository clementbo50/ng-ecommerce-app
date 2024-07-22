import { Routes } from '@angular/router';
import { ProductsCartComponent } from './products-cart/products-cart.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guards';
import { RegisterComponent } from './register/register.component';



export const routes: Routes = [
    { path: 'boutique', component: ProductsCartComponent, canActivate: [AuthGuard] },
    { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard] },
    { path: 'my-products', component: ProductTableComponent, canActivate: [AuthGuard]},
    { path: 'update-product/:id', component: UpdateProductComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '', redirectTo: 'boutique', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
