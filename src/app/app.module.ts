import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CommunityComponent } from './components/community/community.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PromoComponent } from './components/promo/promo.component';
import { FeaturesComponent } from './components/features/features.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarDashComponent } from './components/shared/navbar-dash/navbar-dash.component';
import { ProfileComponent } from './components/shared/profile/profile.component';
import { FriendsComponent } from './components/shared/friends/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CommunityComponent,
    LoginComponent,
    FooterComponent,
    PromoComponent,
    FeaturesComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarDashComponent,
    ProfileComponent,
    FriendsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
