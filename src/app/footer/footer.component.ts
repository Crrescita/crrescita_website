import { Component } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

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

  
}
