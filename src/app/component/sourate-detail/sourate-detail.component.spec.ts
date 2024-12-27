import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourateDetailComponent } from './sourate-detail.component';

describe('SourateDetailComponent', () => {
  let component: SourateDetailComponent;
  let fixture: ComponentFixture<SourateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SourateDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
