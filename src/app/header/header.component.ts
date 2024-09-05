import { CommonModule } from '@angular/common';
import { Component,ElementRef, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menuToggle: boolean = false;

  constructor(
    private gaService: GoogleAnalyticsService) {}  // Inject the GA service

  // Track button click event
 
  trackLinkedinIconClick() {
    this.gaService.event('footer_linkedin_icon', 'user_interaction', 'Footer');
  }

  trackFacebookIconClick() {
    this.gaService.event('footer_facebook_icon', 'user_interaction', 'Footer');
  }
  trackInstagramIconClick() {
    this.gaService.event('footer_instagram_icon', 'user_interaction', 'Footer');
  }

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
