import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() disabled: boolean = false; // can be boolean, true or false
  @Input() onlyIcon: boolean = false; // can be boolean, this will be prioritize over text
  @Input() height: any; // can be String, this will be prioritize over size
  @Input() width: any; // can be String, this will be prioritize over size
  @Input() margin: any; // can be String, this will be prioritize over margin
  @Input() fontSize: any; // can be String, this will be prioritize over size
  @Input() size: String = 'medium'; // can be any of three:-  large, small, medium
  @Input() shape: String = 'circular'; // can be any of two:-  circular, rectangular
  @Input() text: String = 'submit'; // can be a string:-  any
  @Input() textColor: String = 'none'; // can be color or none. Default is none66CB9F
  @Input() type: String = 'solid'; // can be any of three:-  solid, outline, dashed
  @Input() bgColor: String = 'none'; // can be color or none. Default is none

  @Input() prefixIcon: String = 'none'; // can be img src or none. Default is none
  // @Input() prefixIconColor: String = 'none'; // can be color or none. Default is none
  @Input() suffixIcon: String = 'none'; // can be img src or none. Default is none
  // @Input() suffixIconColor: String = 'none'; // can be color or none. Default is none
  @Input() mainIcon: String = 'none'; // can be img src or none. Default is none
  // @Input() mainIconColor: String = 'none'; // can be color or none. Default is none

  @Output() callBackFunction: EventEmitter<any> = new EventEmitter();

  buttonStyle: any = {};
  prefixStyle: any = {};
  suffixStyle: any = {};
  mainIconStyle: any = {};

  constructor() {}

  ngOnInit(): void {
    // Prefix image tag style in-making
    if (this.prefixIcon != undefined && this.prefixIcon != 'none') {
      if (this.size == 'large') {
        this.prefixStyle['height'] = '14px';
        this.prefixStyle['width'] = '14px';
        this.prefixStyle['vertical-align'] = 'top';
        this.prefixStyle['margin-right'] = '0.5rem';
      } else if (this.size == 'medium') {
        this.prefixStyle['height'] = '12px';
        this.prefixStyle['width'] = '12px';
        this.prefixStyle['vertical-align'] = 'top';

        this.prefixStyle['margin-right'] = '0.3rem';
      } else if (this.size == 'small') {
        this.prefixStyle['height'] = '10px';
        this.prefixStyle['width'] = '10px';
        this.prefixStyle['vertical-align'] = 'top';

        this.prefixStyle['margin-right'] = '0.2rem';
      } else {
        this.prefixStyle['height'] = '12px';
        this.prefixStyle['width'] = '12px';
        this.prefixStyle['vertical-align'] = 'top';

        this.prefixStyle['margin-right'] = '0.3rem';
      }
    }

    // Suffix image tag style in-making
    if (this.suffixIcon != undefined && this.suffixIcon != 'none') {
      if (this.size == 'large') {
        this.suffixStyle['height'] = '14px';
        this.suffixStyle['width'] = '14px';
        this.suffixStyle['vertical-align'] = 'top';

        this.suffixStyle['margin-left'] = '0.5rem';
      } else if (this.size == 'medium') {
        this.suffixStyle['height'] = '12px';
        this.suffixStyle['width'] = '12px';
        this.suffixStyle['vertical-align'] = 'top';

        this.suffixStyle['margin-left'] = '0.3rem';
      } else if (this.size == 'small') {
        this.suffixStyle['height'] = '10px';
        this.suffixStyle['width'] = '10px';
        this.suffixStyle['vertical-align'] = 'top';

        this.suffixStyle['margin-left'] = '0.2rem';
      } else {
        this.suffixStyle['height'] = '12px';
        this.suffixStyle['width'] = '12px';
        this.suffixStyle['vertical-align'] = 'top';

        this.suffixStyle['margin-left'] = '0.3rem';
      }
    }
    // Main image tag style in-making
    if (
      this.mainIcon != undefined &&
      this.mainIcon != 'none' &&
      this.onlyIcon
    ) {
      if (this.size == 'large') {
        this.mainIconStyle['height'] = '14px';
        this.mainIconStyle['width'] = '14px';
      } else if (this.size == 'medium') {
        this.mainIconStyle['height'] = '12px';
        this.mainIconStyle['width'] = '12px';
      } else if (this.size == 'small') {
        this.mainIconStyle['height'] = '10px';
        this.mainIconStyle['width'] = '10px';
      } else {
        this.mainIconStyle['height'] = '12px';
        this.mainIconStyle['width'] = '12px';
      }
    }

    // Adding Style to Button

    if (this.type == 'solid') {
      this.buttonStyle['background-color'] = this.bgColor;
      this.buttonStyle['color'] = 'white';
    } else if (this.type == 'outline') {
      this.buttonStyle['border'] = `solid 1px ${this.bgColor}`;
      this.buttonStyle['background'] = 'none';
      this.buttonStyle['color'] = this.bgColor;
    } else if (this.type == 'dashed') {
      this.buttonStyle['border'] = `2px dashed  ${this.bgColor}`;
      this.buttonStyle['background'] = 'none';
      this.buttonStyle['color'] = this.bgColor;
    }

    if (this.size == 'large' && !this.onlyIcon) {
      this.buttonStyle['height'] = '48px';
      this.buttonStyle['width'] = '186px';
      this.buttonStyle['fontSize'] = '14px';
      this.buttonStyle['line-height'] = '14px';
    } else if (this.size == 'medium' && !this.onlyIcon) {
      this.buttonStyle['height'] = '36px';
      this.buttonStyle['width'] = '117px';
      this.buttonStyle['fontSize'] = '12px';
      this.buttonStyle['line-height'] = '12px';
    } else if (this.size == 'small' && !this.onlyIcon) {
      this.buttonStyle['height'] = '26px';
      this.buttonStyle['width'] = '89px';
      this.buttonStyle['fontSize'] = '10px';
      this.buttonStyle['line-height'] = '10px';
    } else if (this.size == 'large' && this.onlyIcon) {
      this.buttonStyle['height'] = '48px';
      this.buttonStyle['width'] = '48px';
      this.buttonStyle['fontSize'] = '14px';
      this.buttonStyle['line-height'] = '14px';
    } else if (this.size == 'medium' && this.onlyIcon) {
      this.buttonStyle['height'] = '36px';
      this.buttonStyle['width'] = '36px';
      this.buttonStyle['fontSize'] = '12px';
      this.buttonStyle['line-height'] = '12px';
    } else if (this.size == 'small' && this.onlyIcon) {
      this.buttonStyle['height'] = '26px';
      this.buttonStyle['width'] = '26px';
      this.buttonStyle['fontSize'] = '10px';
      this.buttonStyle['line-height'] = '10px';
    } else {
      this.buttonStyle['height'] = '36px';
      this.buttonStyle['width'] = '117px';
      this.buttonStyle['fontSize'] = '12px';
      this.buttonStyle['line-height'] = '12px';
    }
    if (this.shape == 'rectangular') {
      this.buttonStyle['border-radius'] = '8px';
    } else if (this.shape == 'circular') {
      this.buttonStyle['border-radius'] = '50px';
    } else if (this.shape == 'none') {
      this.buttonStyle['border-radius'] = '3px';
    }

    if (this.height != undefined) {
      this.buttonStyle['height'] = this.height;
    }
    if (this.width != undefined) {
      this.buttonStyle['width'] = this.width;
    }
    if (this.margin != undefined) {
      this.buttonStyle['margin'] = this.margin;
    }
    if (this.fontSize != undefined && this.fontSize != 'none') {
      this.buttonStyle['fontSize'] = this.fontSize;
    }
    if (this.textColor != undefined && this.textColor != 'none') {
      this.buttonStyle['color'] = this.textColor;
    }
  }

  buttonClickAction() {
    this.callBackFunction.emit('');
  }
}
