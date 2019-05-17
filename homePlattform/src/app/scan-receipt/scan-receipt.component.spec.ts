import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanReceiptComponent } from './scan-receipt.component';

describe('ScanReceiptComponent', () => {
  let component: ScanReceiptComponent;
  let fixture: ComponentFixture<ScanReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
