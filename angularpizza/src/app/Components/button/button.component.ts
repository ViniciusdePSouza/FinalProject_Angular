import { Component, Input, OnInit } from '@angular/core';

import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  title!: string

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('pt-bt');
    this.translate.use('pt-br');
   }

  ngOnInit(): void {
  }

}
