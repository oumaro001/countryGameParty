import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAPIService } from '../services/service-api.service';


@Component({
  selector: 'app-culture-quizz',
  templateUrl: './culture-quizz.component.html',
  styleUrls: ['./culture-quizz.component.scss']
})
export class CultureQuizzComponent implements OnInit {
  nameContinent:any;

  constructor(public apiService: ServiceAPIService,private routeActive: ActivatedRoute, public router:Router) { 
          
  }

  ngOnInit(): void {

    this.nameContinent = this.routeActive.snapshot.paramMap.get('continent');

    console.log(this.nameContinent);
  }

}
