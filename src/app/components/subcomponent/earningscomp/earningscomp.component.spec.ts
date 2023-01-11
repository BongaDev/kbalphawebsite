import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningscompComponent } from './earningscomp.component';

describe('EarningscompComponent', () => {
  let component: EarningscompComponent;
  let fixture: ComponentFixture<EarningscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarningscompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarningscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
