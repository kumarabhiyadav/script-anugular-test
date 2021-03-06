import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChecksComponent } from './form-checks.component';

describe('FormChecksComponent', () => {
  let component: FormChecksComponent;
  let fixture: ComponentFixture<FormChecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormChecksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
