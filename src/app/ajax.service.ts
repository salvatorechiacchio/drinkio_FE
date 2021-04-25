import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(
    private http:HttpClient

  ) { }
  random_drink = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

  margarita = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

  tequila = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=tequila"

  search = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
 
  getMargarita(){
    return this.http.get(this.margarita);
  }

  getName(drink){
    return this.http.get(this.search + drink)
  }

  getTequila(){
    return this.http.get(this.tequila);

  }
  getDrink(){
    return this.http.get(this.random_drink)
  }
}
