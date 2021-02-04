import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BanniereComponent } from './banniere/banniere.component';
import { CardComposantComponent } from './card-composant/card-composant.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BanniereComponent,
    CardComposantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
