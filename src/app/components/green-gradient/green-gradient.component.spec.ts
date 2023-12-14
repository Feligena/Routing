import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenGradientComponent } from './green-gradient.component';

describe('GreenGradientComponent', () => {
  let component: GreenGradientComponent;
  let fixture: ComponentFixture<GreenGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenGradientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreenGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
