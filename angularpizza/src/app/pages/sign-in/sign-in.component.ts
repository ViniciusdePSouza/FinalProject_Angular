import { Component, OnInit } from '@angular/core';

import { ButtonComponent} from '../../Components/button/button.component'

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  logoPath!: string
  constructor() {
    this.logoPath = '/assets/img/logo.svg'
   }

  ngOnInit(): void {
  }

}
