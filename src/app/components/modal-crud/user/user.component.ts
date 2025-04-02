import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../types/user.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  userService = inject(UserService)
  authService = inject(AuthService)
  fb = inject(FormBuilder)

  user: User = {
    user_id: "",
    user_name: "",
    password: "",
    email: "",
  }
  @Input() idEditing: string = ""
  @Output() sentForm = new EventEmitter<void>()
  
    userForm!: FormGroup;
  
  
    ngOnInit(): void {
      this.userForm = this.fb.group({
        user_name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });
  
      if(this.idEditing != "") {
        this.userService.getUserById(this.idEditing).subscribe({
          next: (response) => {
            this.user = response
            this.userForm.patchValue({
              user_name: this.user.user_name,
              email: this.user.email,
            });
          },
          error: (err) => {
            console.log("Erro ao resgatar produto", err)
          }
        })
        this.userForm = this.fb.group({
          user_name: ['', Validators.required],
          email: ['',[ Validators.required, Validators.email]],
          password: [{ value: '', disabled: true }],
          changePassword: [false]
        })
      }
    }

    onChangePassword(event: any) {
      const isChecked = event.target.checked;

      if (isChecked) {
        this.userForm.get('password')?.enable();
      } else {
        this.userForm.get('password')?.disable();
        this.userForm.get('password')?.setValue('');
      }
    }
  
    onSubmit() {
      if(this.idEditing == "") {
        this.addUser()
      }
      else if(this.idEditing != "") {
        this.editUser()
      }
    }
  
    editUser() {
      if (this.userForm.valid) {
        const formValues = this.userForm.value;
        const user_name = formValues.user_name;
        const email = formValues.email;
        const password = formValues.password;

  
        this.userService.editUser(
          this.idEditing, 
          user_name, 
          email, 
          password          
        ).subscribe({
          next: (response) => {
            console.log('Usuário editado com sucesso:', response);
            this.sentForm.emit()
          },
          error: (err) => {
            console.log("Erro ao editar usuário: ", err)
          }
        })
      }
    }
  
    addUser(): void {
      if (this.userForm.valid) {
        const formValues = this.userForm.value;
        const user_name = formValues.user_name;
        const email = formValues.email;
        const password = formValues.password;
  
        this.authService.register(
          user_name, 
          email, 
          password
        )
          .subscribe({
          next: (response) => {
            console.log('User added successfully:', response);
            this.sentForm.emit()
          },
          error: (err) => {
            console.error('Error adding User:', err);
          }
        });
      } else {
        console.error('Form is invalid');
      }
    }
  }
  
