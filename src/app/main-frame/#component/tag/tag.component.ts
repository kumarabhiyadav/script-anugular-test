import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  @Input() text: string;
  @Input() prePointColor: string;

  prePointStyle: any = {};
  constructor() {}

  ngOnInit(): void {
    if (this.prePointColor != null && this.prePointColor != undefined) {
      this.prePointStyle['background-color'] = this.prePointColor;
    }
  }
}
