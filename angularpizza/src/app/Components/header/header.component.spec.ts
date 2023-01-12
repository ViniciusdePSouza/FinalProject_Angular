import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { TranslateModule } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        TranslateModule.forRoot(),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Languages test', () => {
    it('should change language', () => {
     const lang: string = 'pt-br';
  
     const selectInput = fixture.debugElement.query(By.css('.select-input'))
     const changeLangSpy =  jest.spyOn(component, 'changeLang')
  
     selectInput.triggerEventHandler('change', lang)
  
     expect(changeLangSpy).toHaveBeenCalled()
    })

    it('should run changeLang with the default value', () => {
     const selectInput = fixture.debugElement.query(By.css('.select-input'))
     const translateUseSpy = jest.spyOn(component.translate, 'use')
  
     selectInput.triggerEventHandler('change', null)
  
     expect(translateUseSpy).toHaveBeenCalledWith('pt-br')
    })
  })

});
