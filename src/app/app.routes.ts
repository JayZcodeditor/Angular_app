import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // เส้นทางเริ่มต้น
  { path: 'login', component: LoginComponent },        // เส้นทางสำหรับหน้า Login
  { path: 'homepage', component: HomepageComponent }   // เส้นทางสำหรับหน้า Homepage
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
