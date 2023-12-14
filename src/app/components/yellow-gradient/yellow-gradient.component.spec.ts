import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowGradientComponent } from './yellow-gradient.component';

describe('YellowGradientComponent', () => {
  let component: YellowGradientComponent;
  let fixture: ComponentFixture<YellowGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YellowGradientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YellowGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
