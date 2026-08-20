import { Service, signal } from '@angular/core';
import { Interface } from './interface';

@Service()
export class ExemploSignalFormsServices {
    mostrarProdutos = signal<Interface[]>([])
    
    adicionarProdutoArray(produto:Interface){
        this.mostrarProdutos.update(item => [...item, produto])  
        
    }
}
