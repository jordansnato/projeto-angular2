import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PropBinding } from "../../feats/prop-binding/prop-binding";
import { TwoBildingText } from "../../feats/two-bilding-text/two-bilding-text";

@Component({
  selector: 'app-header-component',
  imports: [RouterLink, PropBinding, TwoBildingText],
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

