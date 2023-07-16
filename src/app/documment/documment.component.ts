import { Component, OnInit, ViewChild ,Inject, Injectable} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ServiceAPIService } from '../services/service-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-documment',
  templateUrl: './documment.component.html',
  styleUrls: ['./documment.component.scss']
})

@Injectable()
export class DocummentComponent implements OnInit {
  searchValue!: FormControl;
  searchForm!: FormGroup;
  arrayList!:any[];
  errorSearch!:string;
  error: any;
  infoCountry!:any;
  resultatCountry!:any;
  

  constructor(private fb:FormBuilder, public apiService:ServiceAPIService,  public route: Router  ) {

    this.searchForm = this.fb.group({
      search: new FormControl(),
    })
   }

  ngOnInit(): void {
  }

 
  onSubmit() {
    console.log(this.searchForm.value.search);

    let searchName =this.searchForm.value.search;
    this.apiService.searchCountryDoc(searchName).subscribe((result: any) => {
     
    this.arrayList = result;
    this.errorSearch = 'true';
    this.resultatCountry = 'false'
    console.log(this.arrayList);
    
   }/*,(error: any) => {
    this.error = error;
    console.log(error);
    this.errorSearch = 'false'; 
  })*/

  )}


}
