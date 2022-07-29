import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.scss'],
})
export class PaintingComponent implements OnInit {
  @Input() public painting: any;

  constructor() {}

  ngOnInit(): void {}
}
