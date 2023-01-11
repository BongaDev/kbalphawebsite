import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodatiescompComponent } from './commodatiescomp.component';

describe('CommodatiescompComponent', () => {
  let component: CommodatiescompComponent;
  let fixture: ComponentFixture<CommodatiescompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommodatiescompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodatiescompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
