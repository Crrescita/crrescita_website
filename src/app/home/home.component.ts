import { Component } from '@angular/core';
import { CustomFormComponent } from '../custom-form/custom-form.component';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';  


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CustomFormComponent,ModalFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private gaService: GoogleAnalyticsService) {}  // Inject the GA service

  // Track button click event
  trackButtonClick() {
    this.gaService.event('home_get_started_btn', 'user_interaction', 'Home');
  }

  trackButtonViewMoreClick() {
    this.gaService.event('home_view_more_btn', 'user_interaction', 'Home');
  }

  trackButtonKnowMoreClick() {
    this.gaService.event('home_know_more_btn', 'user_interaction', 'Home');
  }

  trackButtonBlogKnowMoreClick() {
    this.gaService.event('home_blog_know_more_btn', 'user_interaction', 'Home');
  }

  trackButtonFooterGetStarted() {
    this.gaService.event('home_footer_get_started_btn', 'user_interaction', 'Home');
  }
}
