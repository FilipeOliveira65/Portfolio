import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDevelopedComponent } from './projects-developed.component';

describe('ProjectsDevelopedComponent', () => {
  let component: ProjectsDevelopedComponent;
  let fixture: ComponentFixture<ProjectsDevelopedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsDevelopedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsDevelopedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
