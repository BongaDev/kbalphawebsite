import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquatiescompComponent } from './equatiescomp.component';

describe('EquatiescompComponent', () => {
  let component: EquatiescompComponent;
  let fixture: ComponentFixture<EquatiescompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquatiescompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquatiescompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
