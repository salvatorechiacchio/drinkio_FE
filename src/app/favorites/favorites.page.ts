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
    console.log(this.utils.like_cocktail)
    this.items = this.utils.like_cocktail
  }

}
