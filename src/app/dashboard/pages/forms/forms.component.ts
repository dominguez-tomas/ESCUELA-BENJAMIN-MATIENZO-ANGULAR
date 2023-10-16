import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  userForm: FormGroup;

  constructor (
    private formBuilder: FormBuilder){
      this.userForm = this.formBuilder.group({
        nombre: ['',[Validators.required]],
        email: ['',[Validators.required, Validators.email]],
      });
    }
get emailControl(){
  return this.userForm.controls['email'];
}
get emailControlIsInvalid(){
  return this.emailControl.invalid && this.emailControl;
};

get nombreControl(){
  return this.userForm.controls['nombre'];
}
get nombreControlIsInvalid(){
  return this.nombreControl.invalid && this.nombreControl;
}

  onSubmit(): void {
    console.log(this.userForm);
    console.log(this.userForm.controls['email'].value);
    console.log(this.userForm.controls['nombre'].value);

    if (this.userForm.invalid){
      alert('Formulario Invalido');
    }else{
      console.log(this.userForm.value)
    }
  }
}

