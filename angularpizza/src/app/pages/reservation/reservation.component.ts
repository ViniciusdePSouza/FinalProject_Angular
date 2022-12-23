import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TranslateService } from "@ngx-translate/core";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  logoPath!: string
  restaurantPath!: string

  reservationForm!: FormGroup

  constructor(private translate: TranslateService, private fb: FormBuilder, private userService: UserService) {
    this.translate.setDefaultLang('pt-bt');
    this.translate.use('pt-br');

    this.logoPath = '/assets/img/logo.svg'
    this.restaurantPath = '/assets/img/entrance.jpg'

    this.reservationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      date: ['', Validators.required],
      tableFor: ['', Validators.required]
    })
  }

  handleReservation() {
    alert(`Parabéns! Sua reserva foi realizada com sucesso, Dados da reserva:
      Está no nome de: ${this.reservationForm.value.name} ;
      Mesa para: ${this.reservationForm.value.tableFor} ;
      Data: ${this.reservationForm.value.date}
    `)
  }

  ngOnInit(): void {
  }

}
