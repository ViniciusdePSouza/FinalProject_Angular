import { Component, OnInit } from '@angular/core';

import { TranslateService } from "@ngx-translate/core";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';

import { User } from '../../../assets/interfaces/user-interface'

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  logoPath!: string
  signupForm!: FormGroup;
  newUser!: User

  constructor(
    private translate: TranslateService, 
    private fb: FormBuilder,
    private userService: UserService
    ) {
    this.translate.setDefaultLang('pt-bt');
    this.translate.use('pt-br');

    this.logoPath = '/assets/img/logo.svg'

    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(8)]],
      email:  ['', [Validators.required, Validators.minLength(8)]],
      password:  ['', [Validators.required, Validators.minLength(8)]]
    })
   }

  changeLang(event: any) {
    const lang = event?.target?.value || 'pt-br'
    this.translate.use(lang)
  }

  handleSubmit(event: any) {
    this.newUser = this.signupForm.value

    this.userService.create(this.newUser)

    console.log(this.newUser)
  }

  ngOnInit(): void {
  }

}
