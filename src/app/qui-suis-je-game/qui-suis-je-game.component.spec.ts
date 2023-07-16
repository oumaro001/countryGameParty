import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiSuisJeGameComponent } from './qui-suis-je-game.component';

describe('QuiSuisJeGameComponent', () => {
  let component: QuiSuisJeGameComponent;
  let fixture: ComponentFixture<QuiSuisJeGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiSuisJeGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuiSuisJeGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
