import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  title: string = 'Email'
  placeholder: string = 'fulanodasilva@email.com'

  constructor() { }

  ngOnInit(): void {
  }

}
