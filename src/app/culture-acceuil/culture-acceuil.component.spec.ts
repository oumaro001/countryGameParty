import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureAcceuilComponent } from './culture-acceuil.component';

describe('CultureAcceuilComponent', () => {
  let component: CultureAcceuilComponent;
  let fixture: ComponentFixture<CultureAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CultureAcceuilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CultureAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
