import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/Components/shared.module';
import { RouterTestingModule } from "@angular/router/testing";

import { MenuComponent } from './menu.component';
import { Component } from '@angular/core';
import { DrinkService } from 'src/app/services/drinks-service.service';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports: [
        SharedModule,
        FormsModule,
        CommonModule,
        TranslateModule.forRoot(),
        HttpClientModule,
        RouterTestingModule
      ],

      providers: [
        DrinkService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('HTTP requests', () => {
  it('should call the get request method from DrinkService on the first render of the page', () => {
    const drinkServiceMOCK = DrinkService
    const drinkServiceGetMethodSpy = jest.spyOn(drinkServiceMOCK, 'get')

    component.ngOnInit()

    expect(drinkServiceGetMethodSpy).toBeCalled()
  })
})
