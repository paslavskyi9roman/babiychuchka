import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.scss'],
})
export class PoemComponent implements OnInit {
  @Input() public poem: any = {};

  constructor() {}

  ngOnInit(): void {}
}