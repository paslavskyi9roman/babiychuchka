import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.scss'],
})
export class PoemComponent {
  @Input() public poem: any = {};
}
