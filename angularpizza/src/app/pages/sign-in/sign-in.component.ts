import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TranslateService } from "@ngx-translate/core";
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  logoPath!: string

  signInForm!: FormGroup

  constructor(
    private translate: TranslateService,
    private fb: FormBuilder,
    private userService: UserService
    ) {
    this.translate.setDefaultLang('pt-bt');
    this.translate.use('pt-br');

    this.logoPath = '/assets/img/logo.svg'

    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(8)]],
      password:  ['', [Validators.required]]
    }
    )
   }

  ngOnInit(): void {
  }
  
  handleSignIn(){
    console.log(this.signInForm.value)
  }

  changeLang(event: any) {
    const lang: string = event?.target?.value || 'pt-br'
    this.translate.use(lang)
  }

}
