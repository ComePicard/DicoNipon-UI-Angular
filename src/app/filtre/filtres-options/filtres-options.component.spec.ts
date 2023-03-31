import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltresOptionsComponent } from './filtres-options.component';

describe('FiltresOptionsComponent', () => {
  let component: FiltresOptionsComponent;
  let fixture: ComponentFixture<FiltresOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltresOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltresOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
