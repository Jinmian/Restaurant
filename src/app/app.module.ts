import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BanniereComponent } from './banniere/banniere.component';
import { CardComposantComponent } from './card-composant/card-composant.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GmapComponent } from './gmap/gmap.component';
import { HoraireComponent } from './horaire/horaire.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BanniereComponent,
    CardComposantComponent,
    PresentationComponent,
    NavbarComponent,
    GmapComponent,
    HoraireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
