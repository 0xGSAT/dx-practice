import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShubInfoAccordionComponent } from './shub-info-accordion.component';

describe('ShubInfoAccordionComponent', () => {
  let component: ShubInfoAccordionComponent;
  let fixture: ComponentFixture<ShubInfoAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShubInfoAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShubInfoAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
