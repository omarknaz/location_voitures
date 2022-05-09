import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CarlistingComponent } from './carlisting/carlisting.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { AdminComponent } from './admin/admin.component';
import { DataTablesComponent } from './admin/data-tables/data-tables.component';
import { MapsComponent } from './admin/maps/maps.component';
import { NotificationComponent } from './admin/notification/notification.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { SigninComponent } from './authentification/signin/signin.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { ServiceComponent } from './service/service.component';
import { GpsComponent } from './infos/gps/gps.component';
import { AssurComponent } from './infos/assur/assur.component';
import { BebeComponent } from './infos/bebe/bebe.component';
import { AssuranceComponent } from './infos/assurance/assurance.component';
import { AeroportComponent } from './infos/aeroport/aeroport.component';
import { ChauffeurComponent } from './infos/chauffeur/chauffeur.component';
import { DomicileComponent } from './infos/domicile/domicile.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'carlisting', component: CarlistingComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'home-client', component: HomeClientComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'data-tables', component: DataTablesComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'gps', component: GpsComponent },
  { path: 'assur', component: AssurComponent },
  { path: 'bebe', component: BebeComponent },
  { path: 'assurance', component: AssuranceComponent },
  { path: 'aeroport', component: AeroportComponent },
  { path: 'chauffeur', component: ChauffeurComponent },
  { path: 'domicile', component: DomicileComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
