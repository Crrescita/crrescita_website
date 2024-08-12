import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PagesComponent } from './pages/pages.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    {path:'about',component:AboutUsComponent},
    {path:'blog',component:BlogComponent},
    {path:'portfolio',component:PortfolioComponent},
    {path:'pages',component:PagesComponent},
    {path:'contact',component:ContactUsComponent},
   
  
];
