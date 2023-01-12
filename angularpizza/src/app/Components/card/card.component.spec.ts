import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.dish = {
      id: Math.random()*1560,
      ingredients: ['test', 'test2'],
      name: 'Testing Name',
      description: 'Just testing',
      photo: 'TestPhoto.png',
      price: 45.98,
      type: 'test'
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
