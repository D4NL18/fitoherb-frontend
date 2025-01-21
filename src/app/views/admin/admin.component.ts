import { Component } from '@angular/core';
import { SuppliersService } from '../../services/suppliers/suppliers.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  supplierForm!: FormGroup;

  constructor(private fb: FormBuilder, private supplierService: SuppliersService) {
  }

  ngOnInit(): void {
    this.supplierForm = this.fb.group({
      supplierName: ['', Validators.required],
      image: [null, Validators.required],
      isMaster: [false] // Definindo o valor padrão para 'isMaster' como false
    });
  }

  onFileSelect(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.supplierForm.patchValue({ image: file });
    }
  }

  addSupplier(): void {
    if (this.supplierForm.valid) {
      const formValues = this.supplierForm.value;
      const supplierName = formValues.supplierName;
      const image = formValues.image;
      const isMaster = formValues.isMaster;

      this.supplierService.addSupplier(supplierName, image, isMaster).subscribe({
        next: (response) => {
          console.log('Supplier added successfully:', response);
        },
        error: (err) => {
          console.error('Error adding supplier:', err);
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
