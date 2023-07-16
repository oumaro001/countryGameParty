import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzAcceuilComponent } from './quizz-acceuil.component';

describe('QuizzAcceuilComponent', () => {
  let component: QuizzAcceuilComponent;
  let fixture: ComponentFixture<QuizzAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzAcceuilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
