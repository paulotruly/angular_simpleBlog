import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastpostContainer } from './lastpost-container';

describe('LastpostContainer', () => {
  let component: LastpostContainer;
  let fixture: ComponentFixture<LastpostContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastpostContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastpostContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
