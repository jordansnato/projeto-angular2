import { Service, signal } from '@angular/core';
import { InterfaceExercicio5 } from './interface-exercicio5';

@Service()
export class CadastroUserService {

     mostrarLogin = signal<InterfaceExercicio5[]>([])

     cadastrarUser(user:InterfaceExercicio5){
        this.mostrarLogin.update(item =>[...item , user])
     }
}
