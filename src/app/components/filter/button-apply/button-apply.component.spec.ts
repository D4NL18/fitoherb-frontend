import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonApplyComponent } from './button-apply.component';

describe('ButtonApplyComponent', () => {
  let component: ButtonApplyComponent;
  let fixture: ComponentFixture<ButtonApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonApplyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
