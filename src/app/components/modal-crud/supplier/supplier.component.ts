import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SuppliersService } from '../../../services/suppliers/suppliers.service';
import { ButtonComponent } from "../../button/button.component";
import { Supplier } from '../../../types/Supplier.interface';

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
  supplier: Supplier = {supplierId: "", supplierName: "", imagePath: "", master: false}

  @Output() sentForm = new EventEmitter<void>()
  @Input() idEditing: string = ""

  ngOnInit(): void {
    this.supplierForm = this.fb.group({
      supplierName: ['', Validators.required],
      imagePath: ['', Validators.required],
      isMaster: [false]
    })
    if(this.idEditing != "") {
      this.supplierService.getSupplierById(this.idEditing).subscribe({
        next: (response) => {
          this.supplier = response
          this.supplierForm.patchValue({
            supplierName: this.supplier.supplierName,
            isMaster: this.supplier.master,
          });
        },
        error: (err) => {
          console.log("Erro ao resgatar fornecedor", err)
        }
      })
      this.supplierForm = this.fb.group({
        supplierName: ['', Validators.required],
        imagePath: [''],
        isMaster: ['']
      })
    }
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

    onSubmit(): void {
      if(this.supplierForm.valid  && this.idEditing == "") {
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
      }
      else if(this.supplierForm.valid && this.idEditing != "") {
        const formValues = this.supplierForm.value;
        const supplierName = formValues.supplierName;
        const imagePath = this.selectedFile!
        const isMaster = formValues.isMaster;
  
        this.supplierService.editSupplier(this.idEditing, supplierName, imagePath, isMaster).subscribe({
          next: (response) => {
            console.log("Categoria editada com sucesso: ", response)
            this.sentForm.emit()
          },
          error: (err) => {
            console.log("Erro ao editar categoria: ", err)
          }
        })
      }
      else {
        console.error('Form is invalid');
      }
    }

}
