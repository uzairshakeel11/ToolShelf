import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolListCardComponent } from './tool-list-card.component';

describe('ToolListCardComponent', () => {
  let component: ToolListCardComponent;
  let fixture: ComponentFixture<ToolListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolListCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
