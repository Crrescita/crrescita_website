import { Component } from '@angular/core';
import { ModalFormComponent } from "../modal-form/modal-form.component";
import { CustomFormComponent } from '../custom-form/custom-form.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ModalFormComponent,CustomFormComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  constructor(
    private gaService: GoogleAnalyticsService) {}  // Inject the GA service

  // Track button click event
  trackButtonClick() {
    this.gaService.event('about_get_started_btn', 'user_interaction', 'About');
  }

  trackButtonViewMoreClick() {
    this.gaService.event('about_view_more_btn', 'user_interaction', 'About');
  }

  trackButtonKnowMoreClick() {
    this.gaService.event('about_know_more_btn', 'user_interaction', 'About');
  }

 

  trackButtonFooterGetStarted() {
    this.gaService.event('about_footer_get_started_btn', 'user_interaction', 'About');
  }

}
