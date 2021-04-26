import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(
    private ajax:AjaxService
  ) { }

  ngOnInit() {
  }
 
  isItemAvailable = false;
  items

  getItems(ev){
    console.log(ev.detail.value)
    if(ev.detail.value == ""){
      this.items = null
      this.isItemAvailable = false;
    }else{
      this.ajax.getName(ev.detail.value).subscribe(response => {
        this.items = response
      })
       this.isItemAvailable = true;
    }
}
searchItem(drink){
  console.log(drink)
}

    

}
