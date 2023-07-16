import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-resultat-party',
  templateUrl: './resultat-party.component.html',
  styleUrls: ['./resultat-party.component.scss']
})
export class ResultatPartyComponent implements OnInit {
  plus: any; //point plus
  moins: any; //point moins
  gagnant: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.plus = this.route.snapshot.paramMap.get('pointPlus');
    this.moins = this.route.snapshot.paramMap.get('pointMoins');

    this.plus = parseInt(this.plus);
    this.moins = parseInt(this.moins);

    if (this.plus > this.moins) {
      this.gagnant = true;
    } else {
      this.gagnant = false;
    }
  }

}
