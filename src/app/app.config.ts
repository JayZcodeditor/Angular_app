import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms'; // Import FormsModule

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // ใช้จัดการ routing
    importProvidersFrom(FormsModule), // เพิ่ม FormsModule เพื่อรองรับ ngModel
  ],
};
