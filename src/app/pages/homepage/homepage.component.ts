import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  standalone: true,
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  constructor(private router: Router) {} // Inject Router

  // ฟังก์ชันเมื่อคลิกปุ่ม Logout
  onLogout() {
    this.router.navigate(['/login']); // นำทางกลับไปยังหน้า Login
  }
}
