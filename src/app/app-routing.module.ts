import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"", redirectTo: "home" , pathMatch:"full"},
  {path:"home", component: HomeComponent , title: "Home"},
  {path:"about", component: AboutComponent, title: "About"},
  {path:"portfolio", component: PortfolioComponent, title: "Portfolio"},
  {path:"contact", component: ContactComponent, title: "Contact"},
  {path:"**" , component:NotFoundComponent, title: "404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
