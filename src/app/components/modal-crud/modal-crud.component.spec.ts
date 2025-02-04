import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCRUDComponent } from './modal-crud.component';

describe('ModalCRUDComponent', () => {
  let component: ModalCRUDComponent;
  let fixture: ComponentFixture<ModalCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCRUDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
