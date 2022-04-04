import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cardType: string = 'normal'; //normal, notification
  @Input() cardStyle: any;
  @Input() title: any;
  @Input() subTitle: any;
  @Input() description: any;
  @Input() img: any;
  @Input() imgStyle: any;
  @Input() imgPosition: string = 'top';
  @Input() showPositionTopRightButton: boolean = false;
  @Input() showPositionTopLeftButton: boolean = false;

  @Input() contentPosition: string = 'center'; //center, left, right

  alignContentStyle: any = {};

  @Output() btmLeftButtonCallBackFunction: EventEmitter<any> =
    new EventEmitter();
  @Output() btmRightButtonCallBackFunction: EventEmitter<any> =
    new EventEmitter();

  @Output() callBackFunction: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    if (this.contentPosition == 'right') {
      this.alignContentStyle['text-align'] = 'right';
      this.alignContentStyle['justify-content'] = 'right';
    } else if (this.contentPosition == 'left') {
      this.alignContentStyle['text-align'] = 'left';
      this.alignContentStyle['justify-content'] = 'left';
    } else {
      this.alignContentStyle['text-align'] = 'center';
      this.alignContentStyle['justify-content'] = 'center';
    }
  }
  cardClickAction() {
    this.callBackFunction.emit('');
  }
}
