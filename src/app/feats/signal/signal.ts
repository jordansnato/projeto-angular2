import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {

  idade = signal(24)

  mudarValor(){
    this.idade.set(20)
  }

  incrementarIdade(){
    this.idade.update(atual => atual + 1)
  }

}
