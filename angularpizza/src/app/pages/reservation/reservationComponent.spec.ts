import { PathLocationStrategy } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationComponent } from './reservation.component';

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationComponent]
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

      fixture.nativeElement.querySelector('button')

      const handleReservationSpy =  jest.spyOn(component,'handleReservation')

      expect(handleReservationSpy).toHaveBeenCalled()
    });
  })

});
