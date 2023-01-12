import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  datos!: string;
  conf!: string;
  min:string=" (Mínimo 10 carácteres)";
  val:string=" (Email inválido)";
  txtmen:string=" (No dejar en blanco)";

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
    this.conf = "Todos los datos son válidos";
    this.min = "\n";
    this.val= "\n";
    this.txtmen= "\n";
  }

}

