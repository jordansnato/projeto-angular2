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

  mostrarArray = signal(false)

  itens = signal<Interface[]>([])
  
  produtoModel = signal<Interface>({
    title: '',
    descricao: '',
    preco : null
  })

  interfaceForm = form(this.produtoModel);

  cadastrarProduto(event: SubmitEvent){
    event.preventDefault();

    const produto = this.produtoModel();
    alert("produto cadastrado")

    console.log(produto)

      this.produtoModel.set({
      title: '',
      descricao: '',
      preco : null
    })

    this.itens.update( valor => [...valor, produto]) 
  }

  mostrarProduto(){
    this.mostrarArray.update(valor => !valor)

}
}

