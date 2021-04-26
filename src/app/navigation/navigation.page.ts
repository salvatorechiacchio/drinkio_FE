import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage {

  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  constructor(
    private router: Router,
    private utils:UtilsService
  ) { }
    i:number  = this.utils.like_counter;

  ngOnInit() {
  }
  
}
