import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminaisonComponent } from './terminaison.component';

describe('TerminaisonComponent', () => {
  let component: TerminaisonComponent;
  let fixture: ComponentFixture<TerminaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminaisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
