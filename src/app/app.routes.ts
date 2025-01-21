import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ProductsComponent } from './views/products/products.component';
import { SuppliersComponent } from './views/suppliers/suppliers.component';
import { ContactComponent } from './views/contact/contact.component';
import { AdminComponent } from './views/admin/admin.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "products",
        component: ProductsComponent
    },
    {
        path: "suppliers",
        component: SuppliersComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "admin",
        component: AdminComponent
    }
];
