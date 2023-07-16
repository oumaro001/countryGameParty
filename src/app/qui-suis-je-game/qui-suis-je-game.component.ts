import { Component, OnInit,Injectable,Inject } from '@angular/core';
import { ServiceAPIService } from '../services/service-api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-qui-suis-je-game',
  templateUrl: './qui-suis-je-game.component.html',
  styleUrls: ['./qui-suis-je-game.component.scss']
})

@Injectable()

export class QuiSuisJeGameComponent implements OnInit {
  seconds: number = 6;
  intervalId: any;
  innerHTML!: any;
  arrayCountry!: any;
  arrayRandom: any[] = [];
  bonneReponse!:any;
  listeResponse :any[]=[];
  letGo = false; //demarre la partie
  pointPlus:number = 0;
  pointMoins:number = 0;
  compteurParty: number = 0;
  showQuestionImg: any;
  nameContinent : any
  constructor(public apiService: ServiceAPIService,private routeActive: ActivatedRoute, public router:Router) { 
          
  }

  ngOnInit(): void {
   
    this.nameContinent = this.routeActive.snapshot.paramMap.get('continent');

    console.log(this.nameContinent);
    
    this.compteur();
    

    this.getContinentByName();

  }

  getContinentByName(){ // RECUPERE LES DONNEES AVEC UN NOM

    if(this.nameContinent == "all"){
      this.arrayCountry = this.apiService.getAllCountry().subscribe((data: any) => {
        this.arrayCountry = data;
      })
    }else{

      this.arrayCountry = this.apiService.getContinent(this.nameContinent).subscribe((data: any) => {
        this.arrayCountry = data;
      })
    }
  }

  compteur() { // LANCE LE COMPTE A REBOURS
    this.intervalId = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
        this.innerHTML = this.seconds
      } else {
        this.stopCountdown();
      }
    }, 1000);

  }

  stopCountdown() { // STOP LE COMPTE A REBOURS
    clearInterval(this.intervalId);
    this.innerHTML = "C'est parti !!";
    this, this.partyGame();
  }

  randomNbr(array:any){ // RETOURNE UN NOMBRE ALEATOIRE

    return Math.floor(Math.random() * array.length);
  }

  recoverArrayCountry() { // RECUPERE 3 PAYS ALEATOIREMENT ET L'AJOUTE DANS " arrayRandom "
    for (let i = 0; i < 3; i++) {
      let nbr = Math.floor(Math.random() * this.arrayCountry.length)
      this.arrayRandom.push(this.arrayCountry[nbr]);
      //console.log(this.arrayRandom[i]);
    }
  }

  QuestionRepArray(){
    
    
    let reponse1 = this.arrayRandom[this.randomNbr(this.arrayRandom)];
    let reponse2;
    let reponse3;
    
    this.listeResponse.push(reponse1);

    do { //boucle faire(do) tant que(while)
      reponse2 = this.arrayRandom[this.randomNbr(this.arrayRandom)];
      reponse3 = this.arrayRandom[this.randomNbr(this.arrayRandom)];
    } while (reponse2 == reponse1 || reponse3 == reponse1 || reponse2 == reponse3);
    
    this.listeResponse.push(reponse2,reponse3);

    console.log(this.listeResponse);
     
  }

  
  partyGame() {
    
    
    this.innerHTML = "";
    this.recoverArrayCountry();
    this.QuestionRepArray();
    this.bonneReponse = this.listeResponse[this.randomNbr(this.listeResponse)];
    this.letGo = true;
    this.showQuestionImg = `<img src="${this.bonneReponse.flags.png}" alt="" class="btn btn-light">`;
    //this.btnReponse1 = `${this.listeResponse[0].name.common}`;
    //this.btnReponse2 = this.listeResponse[1].name.common;
    //this.btnReponse3 = `${this.listeResponse[2].name.common}`;
   

  }

  verifReponses(country:any){

      if(country == this.bonneReponse.name.common){
        this.pointPlus++;
        this.letGo = false;
        this.compteurParty++;
        this.listeResponse = [];
        this.partyGame();

      }else{

        this.pointMoins++;
        this.letGo = false;
        this.compteurParty++;
        this.listeResponse = [];
        this.partyGame();
      }

      if(this.compteurParty == 25){

        this.router.navigate([`resultat_party/${this.pointPlus}/${this.pointMoins}`])
      }

  }

}
function elseif(arg0: boolean) {
  throw new Error('Function not implemented.');
}

