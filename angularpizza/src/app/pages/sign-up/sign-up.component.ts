import { Component, OnInit } from '@angular/core';

import { TranslateService } from "@ngx-translate/core";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';

import { User, NewUser } from '../../../assets/interfaces/user-interface'

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  logoPath!: string
  signupForm!: FormGroup;
  newUser!: NewUser

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
      email: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  changeLang(event: any) {
    const lang = event?.target?.value || 'pt-br'
    this.translate.use(lang)
  }

  handleSubmit(event: any) {
    this.newUser = 
      {
        name: this.signupForm.value.name,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        isAdm: false
      }
    
    this.userService.create(this.newUser)
    .subscribe(
        () => alert('Conta criada com sucesso')
      )
    
    this.signupForm.reset()

    console.log(this.newUser)
  }

  ngOnInit(): void {
  }

}
