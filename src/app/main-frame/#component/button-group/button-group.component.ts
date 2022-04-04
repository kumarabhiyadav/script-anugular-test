import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
})
export class ButtonGroupComponent implements OnInit {
  @Input() defaultSelectedIndex: Number = 0;
  @Input() size: string;
  @Input() buttonList: any;
  @Input() buttonEnableColor: any;
  @Input() buttonEnableTextColor: any;
  @Input() buttonDisableColor: any;
  @Input() buttonDisableTextColor: any;
  @Input() buttonHoverColor: any;
  @Input() bgColor: any;
  @Input() onlyIcon: boolean = false;
  @Input() prefixIcon: String = 'none'; // can be img src or none. Default is none
  @Input() suffixIcon: String = 'none'; // can be img src or none. Default is none

  @Output() callBackFunction: EventEmitter<any> = new EventEmitter();

  bgDivStyle: any = {};
  verticalDivStyle: any = {};
  selectedButtonStyle: any = {};
  unSelectedButtonStyle: any = {};
  imgStyle: any = {};

  constructor() {}

  ngOnInit(): void {
    if (!this.onlyIcon) {
      this.buttonList.forEach((element: any, index: number) => {
        element['selected'] = false;
        element['index'] = index;
      });
      if (
        this.defaultSelectedIndex != null &&
        this.defaultSelectedIndex != undefined
      ) {
        this.buttonList.forEach((element: any, index: number) => {
          if (index == this.defaultSelectedIndex) {
            element['selected'] = true;
          }
        });
      }
    }

    this.imgStyle['cursor'] = 'pointer';
    this.bgDivStyle['padding'] = '5px';
    this.bgDivStyle['display'] = 'flex';
    this.bgDivStyle['align-items'] = 'center';
    this.selectedButtonStyle['background-color'] = this.buttonEnableColor;
    this.unSelectedButtonStyle['background-color'] = this.buttonDisableColor;
    this.selectedButtonStyle['color'] = this.buttonEnableTextColor;
    this.unSelectedButtonStyle['color'] = this.buttonDisableTextColor;

    if (this.size == 'large' && !this.onlyIcon) {
      this.verticalDivStyle['height'] = '30px';
      this.verticalDivStyle['border-right'] = '1px solid rgb(223 223 223)';
      this.selectedButtonStyle['height'] = '48px';
      this.selectedButtonStyle['width'] = '186px';
      this.selectedButtonStyle['fontSize'] = '14px';
      this.selectedButtonStyle['line-height'] = '14px';
      this.unSelectedButtonStyle['height'] = '48px';
      this.unSelectedButtonStyle['width'] = '186px';
      this.unSelectedButtonStyle['fontSize'] = '14px';
      this.unSelectedButtonStyle['line-height'] = '14px';
    } else if (this.size == 'medium' && !this.onlyIcon) {
      this.verticalDivStyle['height'] = '20px';
      this.verticalDivStyle['border-right'] = '1px solid rgb(223 223 223)';
      this.selectedButtonStyle['height'] = '36px';
      this.selectedButtonStyle['width'] = '117px';
      this.selectedButtonStyle['fontSize'] = '12px';
      this.selectedButtonStyle['line-height'] = '12px';
      this.unSelectedButtonStyle['height'] = '36px';
      this.unSelectedButtonStyle['width'] = '117px';
      this.unSelectedButtonStyle['fontSize'] = '12px';
      this.unSelectedButtonStyle['line-height'] = '12px';
    } else if (this.size == 'small' && !this.onlyIcon) {
      this.verticalDivStyle['height'] = '10px';
      this.verticalDivStyle['border-right'] = '1px solid rgb(223 223 223)';
      this.selectedButtonStyle['height'] = '26px';
      this.selectedButtonStyle['width'] = '89px';
      this.selectedButtonStyle['fontSize'] = '10px';
      this.selectedButtonStyle['line-height'] = '10px';
      this.unSelectedButtonStyle['height'] = '26px';
      this.unSelectedButtonStyle['width'] = '89px';
      this.unSelectedButtonStyle['fontSize'] = '10px';
      this.unSelectedButtonStyle['line-height'] = '10px';
    } else if (this.size == 'large' && this.onlyIcon) {
      this.bgDivStyle['height'] = '48px';
      this.bgDivStyle['width'] = '100px';
      this.bgDivStyle['justify-content'] = 'space-evenly';
      this.bgDivStyle['border-radius'] = '8px';
      this.verticalDivStyle['height'] = '30px';
      this.verticalDivStyle['border-right'] = '1px solid rgb(223 223 223)';
      this.imgStyle['height'] = '14px';
      this.imgStyle['width'] = '14px';
    } else if (this.size == 'medium' && this.onlyIcon) {
      this.bgDivStyle['height'] = '36px';
      this.bgDivStyle['width'] = '70px';
      this.bgDivStyle['justify-content'] = 'space-evenly';

      this.bgDivStyle['border-radius'] = '8px';

      this.verticalDivStyle['height'] = '20px';
      this.verticalDivStyle['border-right'] = '1px solid rgb(223 223 223)';
      this.imgStyle['height'] = '12px';
      this.imgStyle['width'] = '12px';
    } else if (this.size == 'small' && this.onlyIcon) {
      this.bgDivStyle['height'] = '28px';
      this.bgDivStyle['width'] = '50px';
      this.bgDivStyle['justify-content'] = 'space-evenly';

      this.bgDivStyle['border-radius'] = '8px';

      this.verticalDivStyle['height'] = '10px';
      this.verticalDivStyle['border-right'] = '1px solid rgb(223 223 223)';
      this.imgStyle['height'] = '10px';
      this.imgStyle['width'] = '10px';
    } else {
      this.imgStyle['height'] = '10px';
      this.imgStyle['width'] = '10px';
      this.verticalDivStyle['height'] = '20px';
      this.verticalDivStyle['border-right'] = '1px solid rgb(223 223 223)';
      this.selectedButtonStyle['height'] = '36px';
      this.selectedButtonStyle['width'] = '117px';
      this.selectedButtonStyle['fontSize'] = '12px';
      this.selectedButtonStyle['line-height'] = '12px';
      this.unSelectedButtonStyle['height'] = '36px';
      this.unSelectedButtonStyle['width'] = '117px';
      this.unSelectedButtonStyle['fontSize'] = '12px';
      this.unSelectedButtonStyle['line-height'] = '12px';
    }

    if (
      this.bgColor != null &&
      this.bgColor != undefined &&
      this.bgColor != 'none'
    ) {
      this.bgDivStyle['background-color'] = this.bgColor;
    } else {
      this.bgDivStyle['background-color'] = '#F7FAFC';
    }
  }
  getSelectedButtonIndex() {
    let i = 0;
    this.buttonList.forEach((element: any, index: any) => {
      if (element['selected']) {
        i = index;
      }
    });
    return i;
  }
  buttonClickAction(index: any) {
    this.buttonList.forEach((element: any, i: number) => {
      element['selected'] = false;
    });
    this.buttonList.forEach((element: any, i: number) => {
      if (i == index) {
        element['selected'] = true;
      }
    });
    this.callBackFunction.emit(index);
  }
  imageClickAction(index: any) {
    this.callBackFunction.emit(index);
  }
}
