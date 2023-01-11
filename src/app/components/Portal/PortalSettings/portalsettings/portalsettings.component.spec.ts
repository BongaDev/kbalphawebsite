import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalsettingsComponent } from './portalsettings.component';

describe('PortalsettingsComponent', () => {
  let component: PortalsettingsComponent;
  let fixture: ComponentFixture<PortalsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalsettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
