import { Component } from '@angular/core';
import { CustomFormComponent } from '../custom-form/custom-form.component';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [CustomFormComponent,ModalFormComponent],
  templateUrl: './branding.component.html',
  styleUrl: './branding.component.css'
})
export class BrandingComponent {
  constructor(
    private gaService: GoogleAnalyticsService) {}  // Inject the GA service

    // Track button click event
  trackButtonClick() {
    this.gaService.event('branding_get_started_btn', 'user_interaction', 'Branding');
  }


  trackButtonFooterGetStarted() {
    this.gaService.event('branding_get_started_footer_btn', 'user_interaction', 'Branding');
  }
}
