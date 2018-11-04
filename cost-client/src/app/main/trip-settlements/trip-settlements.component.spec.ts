import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripSettlementsComponent } from './trip-settlements.component';

describe('TripSettlementsComponent', () => {
  let component: TripSettlementsComponent;
  let fixture: ComponentFixture<TripSettlementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripSettlementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripSettlementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
