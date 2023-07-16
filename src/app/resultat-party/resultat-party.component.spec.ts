import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatPartyComponent } from './resultat-party.component';

describe('ResultatPartyComponent', () => {
  let component: ResultatPartyComponent;
  let fixture: ComponentFixture<ResultatPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatPartyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultatPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
