import { Component, signal } from '@angular/core';
import { form, FormField } from "@angular/forms/signals";
import { InterfaceExercicio5 } from './interface-exercicio5';
import { InterfaceCadastro } from './interface-cadastro';

@Component({
  selector: 'app-execicio5',
  imports: [FormField],
  templateUrl: './execicio5.html',
  styleUrl: './execicio5.css',
})
export class Execicio5 {

  mostrarLogin = signal<InterfaceExercicio5[]>([])
  loginModel = signal<InterfaceCadastro>({
     nome:'',
    email:'',
    senha:'',
    confirmeSenha: '',
    nascimento:null
  });

  loginForm = form(this.loginModel, (s)=>{

  })

  cadastro(){

  }

}
