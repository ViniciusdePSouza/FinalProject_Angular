import { Component, OnInit } from '@angular/core';

import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  logoPath!: string
  restaurantPath!: string

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('pt-bt');
    this.translate.use('pt-br');

    this.logoPath = '/assets/img/logo.svg'
    this.restaurantPath = '/assets/img/restaurant.jpg'
  }

  ngOnInit(): void {
  }

  changeLang(event: any) {
    const lang: string = event?.target?.value || 'pt-br'
    this.translate.use(lang)
  }

}
