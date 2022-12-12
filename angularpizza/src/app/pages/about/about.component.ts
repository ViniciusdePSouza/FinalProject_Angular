import { Component, OnInit } from '@angular/core';

import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
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
