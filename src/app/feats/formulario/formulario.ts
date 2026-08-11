import { Component, signal } from '@angular/core';
import { email, form, FormField, required } from "@angular/forms/signals";
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
    email:'',
    senha: ''
  });

  protected InterfaceForms = form(this.userModel , (s)=>{
    required(s.email,{message:'O usuário é obrigatório'});
    email(s.email,{message:'O email não é do tipo email!'})

     required(s.senha,{message:'O campo da senha é obrigatório'})
  });


  cadastrar(event: SubmitEvent){
    event.preventDefault();

    if(this.userModel().email === "jordan" && this.userModel().senha === 'jordan2004#'){
      this.userConect.set(true)
    }

    this.userModel.set({
        email:'',
        senha: ''
    })

  }

}
