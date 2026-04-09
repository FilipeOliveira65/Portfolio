import { Component } from '@angular/core';
import { ProfessionalPresentationComponent } from './professional-presentation/professional-presentation.component';

@Component({
  selector: 'app-principal-page',
  imports: [
    ProfessionalPresentationComponent,
  ],
  templateUrl: './principal-page.component.html',
  styleUrl: './principal-page.component.scss',
})
export class PrincipalPageComponent {

}
