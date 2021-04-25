import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.page.html',
  styleUrls: ['./like.page.scss'],
})
export class LikePage implements OnInit {

  constructor(
    private utils: UtilsService
  ) { }
  items = []
  isItemAvailable = false

  ngOnInit() {
    console.log(this.utils.like_cocktail)
    this.items = this.utils.like_cocktail
  }

}
