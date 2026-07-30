import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalContactsComponent } from './professional-contacts.component';

describe('ProfessionalContactsComponent', () => {
  let component: ProfessionalContactsComponent;
  let fixture: ComponentFixture<ProfessionalContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalContactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
