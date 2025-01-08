import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsAboutComponent } from './cards-about.component';

describe('CardsAboutComponent', () => {
  let component: CardsAboutComponent;
  let fixture: ComponentFixture<CardsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
