import { Component, OnInit } from '@angular/core';

import { Dish } from '../../../assets/interfaces/dishInterface'

import { TranslateService } from "@ngx-translate/core";

import { DishServiceService } from 'src/app/services/dish-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  logoPath!: string

  mainDishes: Dish[] = [
    {
      id: 1,
      name: 'Torrada de Parma',
      description: 'Presunto de parma e rúcula em um pão com fermentação natural',
      price: 25.97,
      type: 'main',
      photo: '9b397ccb245fb5a10b88-Parma-Toast.png',
      ingredients: ['pão','presunto','rúcula']
    },
    {
      id: 2,
      name: 'Spaguetti Gambe',
      description: 'Massa Fresca com camarões e pesto',
      price: 79.97,
      type: 'main',
      photo: '9074711fd4129861b36d-Spaguetti Gambe.png',
      ingredients: ['camarão','massa','pesto']
    },
    {
      id: 3,
      name: 'Salada Molla',
      description: 'Tomates, coentro, pepino, cebola roxa. Frescos e temperados',
      price: 19.97,
      type: 'main',
      photo: '6d7f3a35783fdce17ffc-Salada Molla.png',
      ingredients: ['tomate','alface','rabanete','pão naan']
    },
  ]

  desserts: Dish[] = [
    {
      id: 4,
      name: 'Prugna Pie',
      description: 'Torta de ameixa com massa amanteigada, polvilho em açúcar',
      price: 49.97,
      type: 'dessert',
      photo: 'a16dcd05a726b87b6ad2-Prugna Pie.png',
      ingredients: ['farinha','ameixa']
    },

    {
      id: 5,
      name: 'Peachy Pastrie',
      description: 'Delicioso folheado de pêssego com folhas de hortelã',
      price: 32.97,
      type: 'dessert',
      photo: '95b640e7f9855e54452a-Peachy Patrie.png',
      ingredients: ['farinha','pêssego']
    },

    {
      id: 6,
      name: 'Macarons',
      description: 'Farinha de amêndoas, manteiga, claras e açúcar',
      price: 19.97,
      type: 'dessert',
      photo: '2f9b81b6609d2c43812b-Macarons Rosa.png',
      ingredients: ['ovo','amêndoas']
    },
  ]

  drinks: Dish[] = [
    {
      id: 7,
      name: 'Suco de Maracujá',
      description: 'Suco de maracujá gelado',
      price: 32.97,
      type: 'dessert',
      photo: '523e7dd3150e1dc93a40-Suco de MaracujÃ¡.png',
      ingredients: ['maracujá']
    },
  
    {
      id: 8,
      name: "Tè D'Autunno",
      description: 'Chá de anis, canela e limão. Sinta o outono italiano',
      price: 19.97,
      type: 'dessert',
      photo: '768f9615b9cd7f761a16-Te DAutunno.png',
      ingredients: ['canela','aniz','limão']
    },

    {
      id: 9,
      name: 'Pomo Bourbon',
      description: 'Maçã, whisky, canela. On the rocks',
      price: 79.97,
      type: 'dessert',
      photo: '239482ea0f476c3f01cf-Pomo Bourbon.png',
      ingredients: ['maçã','whiskey','canela']
    },
  ]

  constructor(private translate: TranslateService, private dishService: DishServiceService) {
    this.translate.setDefaultLang('pt-bt');
    this.translate.use('pt-br');

    this.logoPath = '/assets/img/logo.svg'
  }

  ngOnInit(): void {
    this.dishService.get('main').subscribe(response => {
      console.log(response)
    })
  }

}
