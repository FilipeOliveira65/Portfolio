import { Component, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-professional-presentation',
  standalone: true,
  templateUrl: './professional-presentation.component.html',
  styleUrl: './professional-presentation.component.scss',
})
export class ProfessionalPresentationComponent {
  currentAuthorAger = 0;

  ngOnInit() {
    this.calculateAuthorAge();

    console.log(this.currentAuthorAger)
  }

  calculateAuthorAge() {
    const birthDate = "05/10/2004";
    const [birthDay, birthMonth, birthYear] = birthDate.split("/")

    var currentDate = new Date();
    var currentDay = currentDate.getDay();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();

    this.currentAuthorAger = Number(currentYear) - Number(birthYear);

    if (
      Number(currentDay) != 5 &&
      Number(currentMonth) < 10
    ) {
      this.currentAuthorAger -= 1;
    }

    return this.currentAuthorAger
  }

  buttonToDownloadCV() {
    const turnButtonIntoLink = document.createElement("a")
    turnButtonIntoLink.href = `${document.baseURI}curriculum-file/curriculo-filipe-de-oliveira-dev-fullstack.pdf`
    turnButtonIntoLink.download = "curriculo-filipe-de-oliveira-dev-fullstack.pdf"
    turnButtonIntoLink.click()
  }
}
