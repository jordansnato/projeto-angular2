
import { Component, signal } from '@angular/core';
import { InterfaceUser } from './interface-user';

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {

    protected usuarios = signal<InterfaceUser[]>([
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
