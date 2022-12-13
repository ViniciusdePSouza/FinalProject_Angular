import { Component, OnInit, Input } from '@angular/core';

// interface Dish {
//   id: number,
//   name: string,
//   description: string,
//   price: number,
//   type: string,
//   photo: string,
//   ingredients: string[]
// }

import { Dish } from '../../../assets/interfaces/dishInterface'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  dishPath!: string

  @Input()
  dish!: Dish

  constructor() {
    this.dishPath = '/assets/img/Spaguetti-Gambe.png'
   }

  ngOnInit(): void {
  }

}
