import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { AuthService } from 'src/app/services/auth.service';
import { SharedModule } from 'src/app/Components/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { UserService } from '../../services/user.service'
import { ReactiveFormsModule } from '@angular/forms';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports: [AuthService, TranslateModule, SharedModule, UserService, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
