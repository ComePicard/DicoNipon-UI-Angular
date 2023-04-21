import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaptisteBlandetComponent } from './baptiste-blandet.component';

describe('BaptisteBlandetComponent', () => {
  let component: BaptisteBlandetComponent;
  let fixture: ComponentFixture<BaptisteBlandetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaptisteBlandetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaptisteBlandetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
