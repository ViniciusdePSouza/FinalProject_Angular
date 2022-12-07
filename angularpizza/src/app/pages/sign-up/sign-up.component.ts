import { Component, OnInit } from '@angular/core';

import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  logoPath!: string

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('pt-bt');
    this.translate.use('pt-br');

    this.logoPath = '/assets/img/logo.svg'
   }

  changeLang(event: any) {
    const lang = event?.target?.value || 'pt-br'
    this.translate.use(lang)
  }


  ngOnInit(): void {
  }

}
