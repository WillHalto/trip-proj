import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSignInComponent } from './test-sign-in.component';

describe('TestSignInComponent', () => {
  let component: TestSignInComponent;
  let fixture: ComponentFixture<TestSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
