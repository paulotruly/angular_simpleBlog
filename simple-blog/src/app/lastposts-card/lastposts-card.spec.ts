import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastpostsCard } from './lastposts-card';

describe('LastpostsCard', () => {
  let component: LastpostsCard;
  let fixture: ComponentFixture<LastpostsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastpostsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastpostsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
