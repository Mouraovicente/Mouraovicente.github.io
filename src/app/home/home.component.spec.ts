import { TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  it('should create', async () => {
    await TestBed.configureTestingModule({ declarations: [HomeComponent] }).compileComponents();
    expect(TestBed.createComponent(HomeComponent).componentInstance).toBeTruthy();
  });
});
