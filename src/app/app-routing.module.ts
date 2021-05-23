import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import{MoviesComponent} from './movies/movies.component';
import{CartComponent} from './cart/cart.component';

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'movies',component:MoviesComponent},
  {path:'login',component: LoginComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'cart',component: CartComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
