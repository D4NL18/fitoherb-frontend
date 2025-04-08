import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';
import { ModalResponseComponent } from '../../components/modal-response/modal-response.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ModalResponseComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);
  private userService = inject(UserService);
  loginForm!: FormGroup;

  isModalResponseOpen: boolean = false;
  modalResponseType: string = 'error';

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  handleModalResponseClose() {
    this.isModalResponseOpen = false;
  }

  async onSubmit() {
    try {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: (response) => {
          this.userService.saveToken(response.token);
          this.router.navigate(['/admin/dashboard']);
          this.modalResponseType = 'success';
          this.isModalResponseOpen = true;
        },
        error: (error) => {
          console.error(error)
          this.modalResponseType = 'error';
          this.isModalResponseOpen = true;
        }
      });
    } catch (error) {
      console.log(error)
      this.modalResponseType = 'error';
      this.isModalResponseOpen = true;
    }
  }
}
