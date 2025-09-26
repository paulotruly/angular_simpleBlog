import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPosts } from './add-posts';

describe('AddPosts', () => {
  let component: AddPosts;
  let fixture: ComponentFixture<AddPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPosts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPosts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
