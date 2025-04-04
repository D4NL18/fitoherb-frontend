import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDataComponent } from './select-data.component';

describe('SelectDataComponent', () => {
  let component: SelectDataComponent;
  let fixture: ComponentFixture<SelectDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
