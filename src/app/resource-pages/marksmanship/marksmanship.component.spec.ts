import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksmanshipComponent } from './marksmanship.component';

describe('MarksmanshipComponent', () => {
  let component: MarksmanshipComponent;
  let fixture: ComponentFixture<MarksmanshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksmanshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksmanshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
