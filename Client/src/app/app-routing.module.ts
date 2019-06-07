import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitsComponent} from './produits/produits.component';
import {NouveauProduitsComponent} from './nouveau-produits/nouveau-produits.component';
import {EditProductComponent} from './edit-product/edit-product.component';

const routes: Routes = [
  {
    path:"products",component:ProduitsComponent,
  },
  {
    path:"new-product",component:NouveauProduitsComponent
  },
  {
    path:"edit-product/:id",component:EditProductComponent
  },
  {
    path:"",redirectTo:"/products",pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
