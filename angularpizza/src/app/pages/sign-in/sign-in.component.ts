import { Component, OnInit } from '@angular/core';
const  logo = '../../../img/logo.svg'

import { InputFormComponent } from '../../Components/input-form/input-form.component'

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
