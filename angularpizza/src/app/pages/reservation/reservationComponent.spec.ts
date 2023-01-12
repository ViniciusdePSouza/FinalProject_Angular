import { PathLocationStrategy } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../Components/shared.module'
import { ReservationComponent } from './reservation.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationComponent],
      imports: [
        SharedModule,
        FormsModule,
        RouterModule,
        TranslateModule.forRoot(),
        RouterTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Reservation Component', () => {

    it('should create a reservation for the client', () => {
      const reservationData = {
        name: 'Name for test',
        email: 'test@example.com',
        date: '2022-05-16',
        tableFor: '5'
      }

      component.reservationForm.patchValue(reservationData)

      const button = fixture.debugElement.query(By.css('.submit-btn'));
      const handleReservationSpy = jest.spyOn(component, 'handleReservation')

      button.triggerEventHandler('click', null);

      expect(handleReservationSpy).toHaveBeenCalled()
    });
  })

});
