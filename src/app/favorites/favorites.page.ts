import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  items = []
  isItemAvailable = false

  constructor(
    private utils: UtilsService
  ) { }

  ngOnInit() {
    this.items.push(this.utils.like_cocktail)
    console.log(this.items)
    this.isItemAvailable = true
  }

}
