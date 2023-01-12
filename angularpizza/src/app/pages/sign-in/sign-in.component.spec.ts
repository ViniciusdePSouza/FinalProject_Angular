import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { AuthService } from 'src/app/services/auth.service';
import { SharedModule } from 'src/app/Components/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInComponent ],
      imports:[ TranslateModule.forRoot(), SharedModule, HttpClientModule],
      providers: [AuthService, UserService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
