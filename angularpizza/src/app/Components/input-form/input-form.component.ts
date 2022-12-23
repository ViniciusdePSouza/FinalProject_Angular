import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

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

  @Input()
  control!: FormControl
  constructor() {}

  ngOnInit(): void {
  }

}
