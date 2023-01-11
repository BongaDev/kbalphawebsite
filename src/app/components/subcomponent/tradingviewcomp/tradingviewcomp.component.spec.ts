import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingviewcompComponent } from './tradingviewcomp.component';

describe('TradingviewcompComponent', () => {
  let component: TradingviewcompComponent;
  let fixture: ComponentFixture<TradingviewcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingviewcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingviewcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
