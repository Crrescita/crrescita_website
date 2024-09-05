import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from "ngx-toastr";
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule} from 'ngx-google-analytics';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
     provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideToastr(),
   // NgxGoogleAnalyticsModule with your Google Analytics ID
   {
    provide: NgxGoogleAnalyticsModule,
    useValue: NgxGoogleAnalyticsModule.forRoot('G-QD92DLFTCZ'), // Replace with your GA ID
  },
  // Use NgxGoogleAnalyticsRouterModule to track router navigation events
  {
    provide: NgxGoogleAnalyticsModule,
    useValue: NgxGoogleAnalyticsRouterModule.forRoot(),
  }
    
    
    ]
};
