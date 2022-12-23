import { Component, OnInit } from '@angular/core';

import { Dish } from '../../../assets/interfaces/dishInterface'

import { TranslateService } from "@ngx-translate/core";

import { DishServiceService } from 'src/app/services/dish-service.service';
import { DrinkService } from 'src/app/services/drinks-service.service';
import { DessertService } from 'src/app/services/dessert.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  logoPath!: string

  mainDishes!: Dish[]

  desserts!: Dish[]

  drinks!: Dish[]

  constructor(
    private translate: TranslateService,
    private dishService: DishServiceService,
    private drinkService: DrinkService,
    private dessertService: DessertService
  ) {
    this.translate.setDefaultLang('pt-bt');
    this.translate.use('pt-br');

    this.logoPath = '/assets/img/logo.svg'
  }

  ngOnInit(): void {
    this.dishService.get().subscribe(response => {
      this.mainDishes = response
    })

    this.drinkService.get().subscribe(response => {
      this.drinks = response
    })

    this.dessertService.get().subscribe(response => {
      this.desserts = response
    })
  }

}
