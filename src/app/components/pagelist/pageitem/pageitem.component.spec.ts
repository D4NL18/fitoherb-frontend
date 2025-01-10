import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageitemComponent } from './pageitem.component';

describe('PageitemComponent', () => {
  let component: PageitemComponent;
  let fixture: ComponentFixture<PageitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
