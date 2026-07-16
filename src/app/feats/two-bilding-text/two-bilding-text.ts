import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-bilding-text',
  imports: [FormsModule],
  templateUrl: './two-bilding-text.html',
  styleUrl: './two-bilding-text.css',
})
export class TwoBildingText {

  text: string = '';
}
