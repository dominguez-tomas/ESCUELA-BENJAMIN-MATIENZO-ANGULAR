import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styles: [
  ]
})
export class UserDialogComponent {
  userForm: FormGroup;

  constructor (
    private formBuilder: FormBuilder, private matDialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public user?: User,
    ) {
      this.userForm = this.formBuilder.group({
        nombre: ['',[Validators.required]],
        email: ['',[Validators.required, Validators.email]],
      });
      if (this.user){
        this.userForm.patchValue(this.user);
      }
    }

onsubmit(): void{
  if (this.userForm.invalid){
    this.userForm.markAllAsTouched();
} else {
  this.matDialogRef.close(this.userForm.value);
}
}
}