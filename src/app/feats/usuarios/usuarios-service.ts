import { Service, signal } from '@angular/core';
import { InterfaceUser } from './interface-user';

@Service()
export class UsuariosService {

     readonly usuarios = signal<InterfaceUser[]>([
      {
        id:1,
        nome:'Jordan',
        idade:21
      },
      {
        id:2,
        nome:'Matheus',
        idade:22
      },
      {
        id:3,
        nome:'João',
        idade:18
      }
      
    ]);
}
