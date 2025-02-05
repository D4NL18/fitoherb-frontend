import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SuppliersService } from '../../../services/suppliers/suppliers.service';
import { ButtonComponent } from "../../button/button.component";

@Component({
  selector: 'app-supplier',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.scss'
})
export class SupplierComponent implements OnInit {


  fb = inject(FormBuilder)
  supplierService = inject(SuppliersService)

  supplierForm!: FormGroup;

  selectedFile: File | null = null;

  @Output() sentForm = new EventEmitter<void>()

  ngOnInit(): void {
    this.supplierForm = this.fb.group({
      supplierName: ['', Validators.required],
      imagePath: ['', Validators.required],
      isMaster: [false]
    })
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

    onSubmit(): void {
      if(this.supplierForm.valid) {
        const formValues = this.supplierForm.value;
        const supplierName = formValues.supplierName;
        const imagePath = this.selectedFile!
        const isMaster = formValues.isMaster;

        this.supplierService.addSupplier(supplierName, imagePath, isMaster).subscribe({
          next: (response) => {
            console.log('Supplier added successfully:', response);
            this.sentForm.emit()
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
