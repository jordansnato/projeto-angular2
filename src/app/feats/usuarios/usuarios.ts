
import { Component, signal } from '@angular/core';
import { InterfaceUser } from './interface-user';

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {

    usuarios = signal<InterfaceUser[]>([
      {
        id:1,
        nome:'jordan',
        idade:21
      },
      {
        id:2,
        nome:'matheus',
        idade:22,
      }
      
    ]);

}
