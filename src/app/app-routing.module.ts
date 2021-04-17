import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Injectable} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from "rxjs";

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{ path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) }, 
{ path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) }, 
{ path: 'contacto', loadChildren: () => import('./pages/contacto/contacto.module').then(m => m.ContactoModule) },
  { path: 'register', loadChildren: () => import('./geolink/register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./geolink/login/login.module').then(m => m.LoginModule) },
  { path: 'compra', loadChildren: () => import('./geolink/compra/compra.module').then(m => m.CompraModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

