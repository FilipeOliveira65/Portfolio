import { Component } from '@angular/core';
import { ProfessionalPresentationComponent } from './professional-presentation/professional-presentation.component';
import { HardSkillsComponent } from './hard-skills/hard-skills.component';
import { ProjectsDevelopedComponent } from './projects-developed/projects-developed.component';
import { ProfessionalContactsComponent } from './professional-contacts/professional-contacts.component';
import { MyJourneyComponent } from './my-journey/my-journey.component';

@Component({
  selector: 'app-principal-page',
  imports: [
    ProfessionalPresentationComponent,
    HardSkillsComponent,
    ProjectsDevelopedComponent,
    ProfessionalContactsComponent,
    MyJourneyComponent,
  ],
  templateUrl: './principal-page.component.html',
  styleUrl: './principal-page.component.scss',
})
export class PrincipalPageComponent {

}
