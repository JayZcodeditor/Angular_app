import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true, // ระบุว่าเป็น Standalone Component
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule], // Import FormsModule ใน Component นี้
})
export class LoginComponent {
  username: string = ''; // ตัวแปรผูกกับ ngModel
  password: string = ''; // ตัวแปรผูกกับ ngModel

  constructor(private router: Router) {} // Inject Router

  // ฟังก์ชันเมื่อกด Submit
  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // นำทางไปยังหน้า Homepage
    this.router.navigate(['/homepage']);
  }
}
