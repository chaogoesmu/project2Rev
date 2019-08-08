import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartermasterComponent } from './quartermaster.component';

describe('QuartermasterComponent', () => {
  let component: QuartermasterComponent;
  let fixture: ComponentFixture<QuartermasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartermasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
