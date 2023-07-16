import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()


@Component({
  selector: 'app-quizz-acceuil',
  templateUrl: './quizz-acceuil.component.html',
  styleUrls: ['./quizz-acceuil.component.scss']
})
export class QuizzAcceuilComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit(): void {
 
    
  }


linkGame(continent:any){

  console.log(continent);
  
  this.route.navigate([`/qui_suis_je/${continent}`])
}
}
