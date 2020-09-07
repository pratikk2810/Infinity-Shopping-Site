import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ItemDetailsComponent } from 'src/app/components/item-details/item-details.component';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { SearchedContentComponent } from 'src/app/components/searched-content/searched-content.component';
import { AboutUsComponent } from 'src/app/components/about-us/about-us.component';
import { ContactUsComponent } from 'src/app/components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import {AuthGuard} from 'src/app/auth/auth.guard';
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'cart',component:CartComponent},
  {path:'sarch',component:SearchedContentComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path: 'item-details/:id', component: ItemDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
