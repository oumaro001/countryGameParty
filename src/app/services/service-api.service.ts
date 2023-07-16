import { Injectable } from '@angular/core';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServiceAPIService {

  api ='https://restcountries.com/v3.1/'
  constructor(private http:HttpClient ) { 


}


searchCountryDoc(nameCountry:string){ //recherche un pays dans la page documents

  return this.http.get(this.api + '/translation/' + nameCountry)
   // catchError(this.handleError)
  
}

getByName(name:any){  //recherche un pays avec un nom

  return this.http.get(this.api + 'name/' + name)
}


getAllCountry(){

  return this.http.get(this.api + 'all');
}

getContinent(continent:any){

  return this.http.get(this.api + 'region/' + continent);
}
/*
private handleError(error: HttpErrorResponse) {
  let errorMessage = 'Une erreur s\'est produite';

  if (error.error instanceof ErrorEvent) {
    // Erreur côté client
    errorMessage = `Erreur : ${error.error.message}`;
  } else {
    // Erreur côté serveur
    errorMessage = `Code d'erreur : ${error.status}, message : ${error.message}`;
  }

  // Vous pouvez également envoyer l'erreur à un service de journalisation
  return throwError(errorMessage);
}*/

}
