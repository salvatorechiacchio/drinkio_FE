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
