import { Component } from '@angular/core';
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

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
