import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import{ HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { BabiesComponent } from './babies/babies.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { LogoComponent } from './logo/logo.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { enableProdMode} from '@angular/core';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'coffee', component: CoffeeComponent},
  {path: 'images', component: ImagesComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'logo', component: LogoComponent},
  {path: 'Features', component: CoffeeComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    HomeComponent,
    ImagesComponent,
    BabiesComponent,
    CoffeeComponent,
    LogoComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
enableProdMode()
