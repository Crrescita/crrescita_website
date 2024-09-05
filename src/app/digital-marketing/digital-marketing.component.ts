import { Component } from '@angular/core';
import { CustomFormComponent } from '../custom-form/custom-form.component';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-digital-marketing',
  standalone: true,
  imports: [CustomFormComponent,ModalFormComponent],
  templateUrl: './digital-marketing.component.html',
  styleUrl: './digital-marketing.component.css'
})
export class DigitalMarketingComponent {
  constructor(
    private gaService: GoogleAnalyticsService) {}  // Inject the GA service

  // Track button click event
  trackButtonClick() {
    this.gaService.event('digital_marketing_get_started_btn', 'user_interaction', 'Digital_Marketing');
  }


  trackButtonFooterGetStarted() {
    this.gaService.event('digital_marketing_get_started_footer_btn', 'user_interaction', 'Digital_Marketing');
  }
}
