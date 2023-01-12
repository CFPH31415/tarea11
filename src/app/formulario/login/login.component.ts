import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  datos!: string;
  confirmo!: string;
  minimo:string=" (Mínimo 10 carácteres)";
  valido:string=" (Email inválido)";
  textmensaje:string=" (No puede quedar vacio este mensaje)";

  public formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      nombre: ['',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('[a-zA-Z ]*')
        ]
      ],
      correo: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      mensaje: ['',
        [
          Validators.required,
          Validators.maxLength(500)
        ]
      ]
    })
  }

  send(): any {
    this.datos = `Nombre= ${this.formLogin.value.nombre}
                  Correo= ${this.formLogin.value.correo}
                  Mensaje= ${this.formLogin.value.mensaje}
                `;
    this.confirmo = "Todos los datos son válidos";
    this.minimo = "\n";
    this.valido= "\n";
    this.textmensaje= "\n";
  }

}
