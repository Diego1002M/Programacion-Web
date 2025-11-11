import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterOutlet  } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterOutlet],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class Menu {
  isClosed = true;
  isToggled = false;

  toggleMenu() {
    this.isClosed = !this.isClosed;
  }

  toggleSidebar() {
    this.isToggled = !this.isToggled;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (
      this.isToggled &&
      !target.closest('#sidebar-wrapper') &&
      !target.closest('.hamburger')
    ) {
      this.isToggled = false;
      this.isClosed = true;
    }
  }
}
