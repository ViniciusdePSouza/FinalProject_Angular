import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  name: string = 'Email'
  placeholder: string = 'fulanodasilva@email.com'

  constructor() { }

  ngOnInit(): void {
  }

}
