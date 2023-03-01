import {  Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from 'src/app/interfaces/new-user.interfaces';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent   {
  title: string = 'Agregar nuevo Usuario'

  formModel: FormGroup
  constructor(private routes: Router) {
    this.formModel = new FormGroup({
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      edad: new FormControl("", [
        Validators.required,
        Validators.min(18)
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      dni: new FormControl("", [
        this.dniValidator
      ]),
      password: new FormControl("", [
        Validators.required
      ]),
      repitepassword: new FormControl("", [])
    }, [this.checkpassword])

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

  dniValidator(pControlName: AbstractControl): any {
    //validar de un dni no solo consiste en decir que tenga 8 numeros y letra sino que la letra debe coincidir con la posicion que resuelve de dividir el numero del dni por 23 su resto me da una posicion un array letras.
    const letrasDni: string[] = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    const dni = pControlName.value
    const exp = /^\d{8}[A-Z]/

    if (exp.test(dni)) {
      //el dni esta bien escrito pero no significa que sea valido

      const numero: number = parseInt(dni.substring(0, dni.length - 1))
      const letra: string = dni.at(-1)
      const position: number = numero % 23

      return (letra !== letrasDni[position]) ? { 'dnivalidator': 'La letra no corresponde con el dni' } : null

    } else {
      return { 'dnivalidator': 'formato de dni es incorrecto' }
    }

  }

  getDataForm() {
    console.log(this.formModel.value);

  }

  checkControl(pControlName: string, pError: string): boolean {
    if (this.formModel.get(pControlName)?.hasError(pError) && this.formModel.get(pControlName)?.touched) {
      return true
    }
    return false
  }

  regresarHome() {
    alert('User añadido, Regresando al home')
    this.routes.navigate(['/home'])

  }


}
