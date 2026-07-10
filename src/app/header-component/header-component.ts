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
    
    console.log(document.body.className);

  }
}

