import { Component, OnInit } from '@angular/core';

import { ButtonComponent} from '../../Components/button/button.component'
import { TranslateService } from "@ngx-translate/core";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  logoPath!: string

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('pt-bt');
    this.translate.use('pt-br');

    this.logoPath = '/assets/img/logo.svg'
   }

  ngOnInit(): void {
  }

  changeLang(event: any) {
    const lang: string = event?.target?.value || 'pt-br'
    this.translate.use(lang)
  }

}
