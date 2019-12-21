import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CkSettingsComponent } from './ck-settings.component';

describe('CkSettingsComponent', () => {
  let component: CkSettingsComponent;
  let fixture: ComponentFixture<CkSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CkSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CkSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
