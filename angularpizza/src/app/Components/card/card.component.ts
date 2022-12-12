import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  dishPath!: string

  constructor() {
    this.dishPath = '/assets/img/Spaguetti-Gambe.png'
   }

  ngOnInit(): void {
  }

}
