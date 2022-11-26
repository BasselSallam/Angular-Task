import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './Components/Home/home/home.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { MainComponent } from './Components/Main/main/main.component';
import { ProductsComponent } from './Components/Products/products/products.component';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: MainComponent, canActivate: [AuthGuard], loadChildren: () => import('src/app/lazy/lazy.module').then(m => m.LazyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
