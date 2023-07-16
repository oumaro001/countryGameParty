import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocummentComponent } from './documment/documment.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { QuizzAcceuilComponent } from './quizz-acceuil/quizz-acceuil.component';
import { QuiSuisJeGameComponent } from './qui-suis-je-game/qui-suis-je-game.component';
import { ResultatPartyComponent } from './resultat-party/resultat-party.component';
import { CultureQuizzComponent } from './culture-quizz/culture-quizz.component';
import { CultureAcceuilComponent } from './culture-acceuil/culture-acceuil.component';

const routes: Routes = [
  { path:'' , component: AcceuilComponent},
  { path:'acceuil' , component: AcceuilComponent},
  { path: 'document', component: DocummentComponent },
  { path: 'info_country/:country', component: CountryInfoComponent },
  { path: 'quizz_acceuil', component: QuizzAcceuilComponent },
  { path: 'qui_suis_je/:continent', component: QuiSuisJeGameComponent },
  { path: 'resultat_party/:pointPlus/:pointMoins', component: ResultatPartyComponent },
  { path: 'culture_quizz/:continent', component: CultureQuizzComponent },
  { path: 'culture_acceuil', component: CultureAcceuilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
