import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header-component/header-component';
import { FooterComponent } from '../../components/footer-component/footer-component';
import { Navegation } from '../../components/navegation/navegation';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, Navegation],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
