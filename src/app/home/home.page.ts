import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxService } from '../ajax.service';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  equals = false;
  cocktails
  tequila
i:number = 0
  constructor(
    private router: Router,
    private ajax: AjaxService,
    private utils: UtilsService
  ) {}
    lung = false;
  getApi(){
    this.ajax.getMargarita().subscribe(response => {
      this.cocktails = response
    })
  }

  include(arr, drink) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == drink) this.equals = true;
    }
    if(!this.equals){
      this.utils.like_cocktail.push(drink)
      this.utils.like_counter++

    }
    if(this.equals)this.equals = !this.equals
  }

  like(drink){
    this.include(this.utils.like_cocktail, drink)
    console.log(this.utils.like_cocktail)
  }



  getTeq(){
    this.ajax.getTequila().subscribe(response =>{
      this.tequila = response
    })
  }
  ngOnInit(){
    this.getApi()
    this.getTeq()
  }
  ionViewWillEnter(){
    this.lung = true
  }
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };


}
