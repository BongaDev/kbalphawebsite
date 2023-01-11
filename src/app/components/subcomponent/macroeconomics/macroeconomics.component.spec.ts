import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroeconomicsComponent } from './macroeconomics.component';

describe('MacroeconomicsComponent', () => {
  let component: MacroeconomicsComponent;
  let fixture: ComponentFixture<MacroeconomicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacroeconomicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroeconomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
