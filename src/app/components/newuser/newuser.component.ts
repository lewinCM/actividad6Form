import { AbstractType, Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent {
  title: string = 'Agregar nuevo Usuario'

  formModel: FormGroup
  constructor() {
    this.formModel = new FormGroup(

      {
        nombre: new FormControl("", [Validators.required, Validators.minLength(3)]),
        edad: new FormControl("", [Validators.required, Validators.min(18)]),
        email: new FormControl("", [Validators.required, Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]),
        dni: new FormControl("", [Validators.required, Validators.minLength(7), Validators.maxLength(10)]),
        password: new FormControl("", [Validators.required]),
        repite_password: new FormControl("", []),
      }, [this.checkpassword]
    )
  }

  // validador de contraseñas personalizados
  checkpassword(pFormValue: AbstractControl) {
    const password: string = pFormValue.get('password')?.value
    const repite_password: string = pFormValue.get('repite_password')?.value
    if (password !== repite_password) {
      return { 'checkpassword': true }

    }
    return null

  }

  getDataForm() {
    console.log(this.formModel.value);

  }

  checkControl(pControlName: string, pError: string) {
    if (this.formModel.get(pControlName)?.hasError(pError) && this.formModel.get(pControlName)?.touched) {
      return true
    }
    return false
  }


}
