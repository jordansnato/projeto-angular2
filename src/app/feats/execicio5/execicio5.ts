import { Component, inject, signal } from '@angular/core';
import { form, FormField, required, validate } from "@angular/forms/signals";
import { InterfaceExercicio5 } from './interface-exercicio5';
import { CadastroUserService } from './cadastro-user-service';


@Component({
  selector: 'app-execicio5',
  imports: [FormField],
  templateUrl: './execicio5.html',
  styleUrl: './execicio5.css',
})
export class Execicio5 {

  protected readonly cadastroUserService = inject(CadastroUserService);

  mensagemSenha = signal('')
//  protected mostrarLogin = signal<InterfaceExercicio5[]>([])
  loginModel = signal<InterfaceExercicio5>({
    nome:'',
    email:'',
    senha:'',
    confirmeSenha: '',
    nascimento:null
  });

   loginForm = form(this.loginModel, (s)=>{
    required(s.nome, {message:'Campo nome é obrigatório'});
    required(s.email, {message:'Campo email é obrigatório'});
    required(s.senha, {message:'Campo senha é obrigatório'});
    required(s.confirmeSenha, {message:'Campo confirme a senha é obrigatório'});
    required(s.nascimento, {message:'Campo nascimento é obrigatório'});

    validate(s.confirmeSenha, ({ value, valueOf }) => {

    if (value() !== valueOf(s.senha)) {
      return {
        kind: 'senhasDiferentes',
        message: 'As senhas devem ser iguais!'
      };
    }

    return null;
  });

  })

  cadastro(event:SubmitEvent){

    const user = this.loginModel();
    event.preventDefault(); 


    this.cadastroUserService.cadastrarUser(user)

    // this.mostrarLogin.update(item =>[...item , user])

    this.loginModel.set({
      nome:'',
      email:'',
      senha:'',
      confirmeSenha: '',
      nascimento:null
    })

    // reseta o touched
    this.loginForm().reset()

  }

  excluir(index:number){
  //   this.mostrarLogin.update(usuarios =>
  //   usuarios.filter((_, i) => i !== index)
  // );
  }
}
