import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuIsOpen = false

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen
  }

  get showMenu(): boolean {
    return window.innerWidth > 960 || this.menuIsOpen
  }
}
