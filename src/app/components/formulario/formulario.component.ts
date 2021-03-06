import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { debounceTime } from 'rxjs/operators'
import { FotografoService } from 'src/app/servicios/fotografo.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private fotografoService: FotografoService,
    private router: Router

  ) {

    this.formulario = new FormGroup({

      nombre: new FormControl('', [
        Validators.required
      ]),

      apellidos: new FormControl('', [

        Validators.required
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/)
      ]),

      telefono: new FormControl('',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(20)

        ]),
      direccion: new FormControl('', [
        Validators.required


      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$/)
      ]),

      password_2: new FormControl(),

      bodas: new FormControl(),
      eventosnocturnos: new FormControl(),
      producto: new FormControl(),
      publicidad: new FormControl(),
      paisaje: new FormControl(),
      retrato: new FormControl(),
      modelos: new FormControl(),
      artistica: new FormControl(),
      documental: new FormControl(),
      deportes: new FormControl()



    }, [this.passwordValidator])
  }



  ngOnInit(): void {

    const emailControl = this.formulario.get('email');

    emailControl.valueChanges.pipe(debounceTime(2000)).subscribe((value) => {
      console.log(value)
    })
  }



  passwordValidator(form: FormGroup) {
    const passwordValue = form.get('password').value;
    const passwordRepeatValue = form.get('password_2').value;

    if (passwordValue === passwordRepeatValue) {
      return null;
    } else { return { passwordValidator: true } }

  }
  checkValidator(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;
    //pa que era


  }

  async onSubmit() {


    console.log(this.formulario.value)

    const response = await this.fotografoService.insert(this.formulario.value)
    console.log(response);
    this.router.navigate(['/fotografo'])



  }

}
