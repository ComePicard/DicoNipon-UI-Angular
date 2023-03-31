import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMotsComponent } from './liste-mots.component';

describe('ListeMotsComponent', () => {
  let component: ListeMotsComponent;
  let fixture: ComponentFixture<ListeMotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeMotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
