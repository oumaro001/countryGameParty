import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureQuizzComponent } from './culture-quizz.component';

describe('CultureQuizzComponent', () => {
  let component: CultureQuizzComponent;
  let fixture: ComponentFixture<CultureQuizzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CultureQuizzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CultureQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
