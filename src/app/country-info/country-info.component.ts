import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceAPIService } from '../services/service-api.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {
[x: string]: any;
  country!: any;
  resultatCountry!:any;
  listLanguage!:any;
  

  constructor(private route: ActivatedRoute, public apiService: ServiceAPIService) { }

  ngOnInit(): void {
    this.country = this.route.snapshot.paramMap.get('country');
    // Utilisez la valeur de "country" comme vous le souhaitez dans votre composant
    console.log(this.country);
    this.showInfo();    
  }

 
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  showInfo(){

    this.apiService.getByName(this.country).subscribe((data:any)=>{
    this.resultatCountry = data;
      let items = Object.assign(data);
      console.log(typeof(items));
     
      
      
    })
    
  }
}
