import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaExistosaComponent } from './reserva-existosa.component';

describe('ReservaExistosaComponent', () => {
  let component: ReservaExistosaComponent;
  let fixture: ComponentFixture<ReservaExistosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaExistosaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaExistosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
