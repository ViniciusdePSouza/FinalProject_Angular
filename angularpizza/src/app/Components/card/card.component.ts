import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';

import { Dish } from '../../../assets/interfaces/dishInterface'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  photoPath!: string

  @Input()
  dish!: Dish

  constructor() {
    this.photoPath = 'http://localhost:3333/files/'
   }

  ngOnInit(): void {
  }

}
