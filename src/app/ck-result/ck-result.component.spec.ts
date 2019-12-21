import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CkResultComponent } from './ck-result.component';

describe('CkResultComponent', () => {
  let component: CkResultComponent;
  let fixture: ComponentFixture<CkResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CkResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CkResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
