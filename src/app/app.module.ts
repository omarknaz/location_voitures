import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CarlistingComponent } from './carlisting/carlisting.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { DataTablesComponent } from './admin/data-tables/data-tables.component';
import { MapsComponent } from './admin/maps/maps.component';
import { NotificationComponent } from './admin/notification/notification.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { SigninComponent } from './authentification/signin/signin.component';
import { ServiceComponent } from './service/service.component';
import { GpsComponent } from './infos/gps/gps.component';
import { AssurComponent } from './infos/assur/assur.component';
import { BebeComponent } from './infos/bebe/bebe.component';
import { AssuranceComponent } from './infos/assurance/assurance.component';
import { AeroportComponent } from './infos/aeroport/aeroport.component';
import { ChauffeurComponent } from './infos/chauffeur/chauffeur.component';
import { DomicileComponent } from './infos/domicile/domicile.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CarlistingComponent,
    BlogComponent,
    ContactComponent,
    TestimonialsComponent,
    HomeClientComponent,
    DashboardComponent,
    AdminComponent,
    DataTablesComponent,
    MapsComponent,
    NotificationComponent,
    UserProfileComponent,
    SignupComponent,
    SigninComponent,
    ServiceComponent,
    GpsComponent,
    AssurComponent,
    BebeComponent,
    AssuranceComponent,
    AeroportComponent,
    ChauffeurComponent,
    DomicileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
