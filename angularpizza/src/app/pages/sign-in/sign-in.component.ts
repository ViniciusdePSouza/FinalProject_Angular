import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TranslateService } from "@ngx-translate/core";
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

import { LoginUser } from 'src/assets/interfaces/user-interface';

import { Router } from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  logoPath!: string
  loginUser!: LoginUser
  signInForm!: FormGroup

  constructor(
    private translate: TranslateService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
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
    this.loginUser = this.signInForm.value

    try{
      this.authService.create(this.loginUser).subscribe(response => {
        const user = response.user
        const token = response.token
  
        localStorage.setItem('@angularfood:user', JSON.stringify(user))
        localStorage.setItem('@angularfood:token', token) 

        this.router.navigate([''])
      })

    } catch(error) {
      alert(error)
    }

    this.signInForm.reset()
  }

  changeLang(event: any) {
    const lang: string = event?.target?.value || 'pt-br'
    this.translate.use(lang)
  }

}
