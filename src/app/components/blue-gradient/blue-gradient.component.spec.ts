import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueGradientComponent } from './blue-gradient.component';

describe('BlueGradientComponent', () => {
  let component: BlueGradientComponent;
  let fixture: ComponentFixture<BlueGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlueGradientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlueGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
