import { CommonModule } from '@angular/common';
import { Component,ElementRef, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menuToggle: boolean = false;

  // @ViewChild('navbarSupportedContent') navbarContent!: ElementRef;

  toggleMenu() {
    this.menuToggle = !this.menuToggle;
    console.log('Menu Toggle State:', this.menuToggle);
  }

  closeMenu() {
    this.menuToggle = false;
    console.log('Menu closed');

}
}
