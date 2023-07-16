import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocummentComponent } from './documment/documment.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountryInfoComponent } from './country-info/country-info.component';
import { Routes, RouterModule } from '@angular/router';
import { QuizzAcceuilComponent } from './quizz-acceuil/quizz-acceuil.component';
import { QuiSuisJeGameComponent } from './qui-suis-je-game/qui-suis-je-game.component';
import { ResultatPartyComponent } from './resultat-party/resultat-party.component';
import { CultureQuizzComponent } from './culture-quizz/culture-quizz.component';
import { CultureAcceuilComponent } from './culture-acceuil/culture-acceuil.component'; // CLI imports router





@NgModule({
  declarations: [
    AppComponent,
    DocummentComponent,
    NavBarComponent,
    AcceuilComponent,
    CountryInfoComponent,
    QuizzAcceuilComponent,
    QuiSuisJeGameComponent,
    ResultatPartyComponent,
    CultureQuizzComponent,
    CultureAcceuilComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
