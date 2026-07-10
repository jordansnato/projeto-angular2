import { Component } from '@angular/core';
import { HeaderComponent } from '../../header-component/header-component';
import { FooterComponent } from '../../footer-component/footer-component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
