import { Component, signal } from '@angular/core';
import { Post } from './post';
import { form, required, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-requisicao-post',
  imports: [FormField],
  templateUrl: './requisicao-post.html',
  styleUrl: './requisicao-post.css',
})
export class RequisicaoPost {


  postModel = signal<Post>({
    title:'',
    userId: null,
    body:''
  })

  postform = form(this.postModel , (s)=>{
    required(s.title, {message:'Campo Obrigatório'});
    required(s.userId, {message:'Campo Obrigatório'});
    required(s.body, {message:'Campo Obrigatório'});


  })

  cadastrar(event:SubmitEvent){
    event.preventDefault();

    const login = this.postModel();
  }

  

}
