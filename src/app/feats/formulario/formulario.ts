import { Component, inject, signal } from '@angular/core';
import { email, form, FormField, required } from "@angular/forms/signals";
import { InterfaceForms } from './interface-forms';
import { FormularioService } from './formulario-service';

@Component({
  selector: 'app-formulario',
  imports: [FormField],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  protected readonly loginService = inject(FormularioService) 

  userConect = signal(false);
  userModel = signal<InterfaceForms>({
    email:'',
    senha: ''
  });

  protected loginform = form(this.userModel , (s)=>{
    required(s.email,{message:'O usuário é obrigatório'});
    email(s.email,{message:'O email não é do tipo email!'})

     required(s.senha,{message:'O campo da senha é obrigatório'})
  });


  cadastrar(event: SubmitEvent){
    event.preventDefault();

    const login = this.userModel();
    const logou = this.loginService.efetuarLogin(login)

    if(logou === true){
      this.userConect.set(true)
    }else{
      this.userConect.set(false)
    }

    this.userModel.set({
        email:'',
        senha: ''
    })

    this.loginform().reset();
  }

}
