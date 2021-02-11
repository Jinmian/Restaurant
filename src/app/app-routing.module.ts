import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'app-accueil', component: AccueilComponent },
  { path: 'app-menu', component: MenuComponent },
  { path: 'app-contact', component: ContactComponent },
  { path: '',   redirectTo: '/app-accueil', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
