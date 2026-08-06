import { Component, signal } from '@angular/core';
import { Interface } from './interface';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-exemplo-signal-form',
  imports: [FormField],
  templateUrl: './exemplo-signal-form.html',
  styleUrl: './exemplo-signal-form.css',
})
export class ExemploSignalForm {

  produtoModel = signal<Interface>({
    title: '',
    descricao: '',
    preco : null
  })

  interfaceForm = form(this.produtoModel);

  cadastrarProduto(event: SubmitEvent){
    event.preventDefault();

    const produto = this.produtoModel();

    console.log(produto)

      this.produtoModel.set({
      title: '',
      descricao: '',
      preco : null
    })
  }


}


