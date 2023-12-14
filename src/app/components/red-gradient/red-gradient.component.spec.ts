import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedGradientComponent } from './red-gradient.component';

describe('RedGradientComponent', () => {
  let component: RedGradientComponent;
  let fixture: ComponentFixture<RedGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedGradientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
