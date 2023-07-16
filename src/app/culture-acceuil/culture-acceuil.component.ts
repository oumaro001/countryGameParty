import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-culture-acceuil',
  templateUrl: './culture-acceuil.component.html',
  styleUrls: ['./culture-acceuil.component.scss']
})
export class CultureAcceuilComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit(): void {
  }



  linkGame(continent:any){

    console.log(continent);
    
    this.route.navigate([`/culture_quizz/${continent}`])
  }
}
