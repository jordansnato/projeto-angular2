import { Component, signal } from '@angular/core';
import { form, FormField } from "@angular/forms/signals";
import { InterfaceForms } from './interface-forms';

@Component({
  selector: 'app-formulario',
  imports: [FormField],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  userConect = signal(false);
  userModel = signal<InterfaceForms>({
    user:'',
    senha: ''
  });

  InterfaceForms = form(this.userModel);

  cadastrar(event: SubmitEvent){
    event.preventDefault();

    if(this.userModel().user === "jordan" && this.userModel().senha === 'jordan2004#'){
      this.userConect.set(true)
    }
  }

}
