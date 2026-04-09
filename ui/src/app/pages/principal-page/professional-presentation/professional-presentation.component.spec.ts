import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalPresentationComponent } from './professional-presentation.component';

describe('ProfessionalPresentationComponent', () => {
  let component: ProfessionalPresentationComponent;
  let fixture: ComponentFixture<ProfessionalPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalPresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
