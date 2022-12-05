import { Component, OnInit, Input } from '@angular/core';

import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  @Input()
  title!: string

  @Input()
  placeholder!: string

  @Input()
  type!: string

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
   }

  ngOnInit(): void {
  }

}
