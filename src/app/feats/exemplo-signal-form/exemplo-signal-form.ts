import { Component, inject, signal } from '@angular/core';
import { Interface } from './interface';
import { form, FormField, required } from '@angular/forms/signals';
import { Title } from '@angular/platform-browser';
import { CadastroUserService } from '../execicio5/cadastro-user-service';
import { ExemploSignalFormsServices } from './exemplo-signal-forms-services';


@Component({
  selector: 'app-exemplo-signal-form',
  imports: [FormField],
  templateUrl: './exemplo-signal-form.html',
  styleUrl: './exemplo-signal-form.css',
})
export class ExemploSignalForm {

readonly  cadastroProdutoService = inject(ExemploSignalFormsServices)

product = signal(false)
// mostrarProdutos = signal<Interface[]>([])
produto = signal<Interface>({
  title: '',
  descricao: '',
  preco: null
})

produtoForm = form(this.produto , (s)=>{
  required (s.title,{message:'Nome do produto obrigatório'})
  
  required(s.descricao,{message:'Descrição obrigatória'})

  required(s.preco,{message:'Digite o preço'})
})

adicionarProduto(event: SubmitEvent){
  // evita reload da pagina causado pelo submit
  event.preventDefault();

  const produtoCadastrado = this.produto();

  this.cadastroProdutoService.adicionarProdutoArray(produtoCadastrado)

  // this.mostrarProdutos.update(item => [...item, this.produto()])  
  this.product.set(true)

  this.produto.set({
    title:'',
    descricao:'',
    preco:null
  })

  
}


}
