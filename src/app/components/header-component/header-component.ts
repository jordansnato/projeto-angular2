import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  alterarTema(){
    document.body.classList.toggle('dark')
    const btn = document.querySelector('button')
    if(btn){
      if(document.body.classList.contains('dark')){
        btn.innerHTML = "Claro"
      }else{
        btn.innerHTML = "Escuro"
      }
    }

  }
}

