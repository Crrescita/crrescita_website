import { Component } from '@angular/core';
import { CustomFormComponent } from '../custom-form/custom-form.component';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-website-development',
  standalone: true,
  imports: [CustomFormComponent,ModalFormComponent],
  templateUrl: './website-development.component.html',
  styleUrl: './website-development.component.css'
})
export class WebsiteDevelopmentComponent {
  constructor(
    private gaService: GoogleAnalyticsService) {}  // Inject the GA service

  // Track button click event
  trackButtonClick() {
    this.gaService.event('website_development_get_started_btn', 'user_interaction', 'Website_development');
  }


  trackButtonFooterGetStarted() {
    this.gaService.event('website_development_get_started_footer_btn', 'user_interaction', 'Website_development');
  }
}
