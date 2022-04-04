import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() value: number=0;
  @Input() height: string='0.625rem';
  @Input() bgColor: string='';
  @Input() text: string='';
  @Input() striped: boolean=false;
  @Input() animatedStriped: boolean=false;

  divStyle:any={};
  barStyle:any={};
  constructor() {}

  ngOnInit(): void {
    this.divStyle['height']=this.height;
    this.barStyle['width']=`${this.value}%`;
    if(this.bgColor!=null && this.bgColor!=undefined){
      this.barStyle['background-color']=`${this.bgColor}`;

    }
  }
}
