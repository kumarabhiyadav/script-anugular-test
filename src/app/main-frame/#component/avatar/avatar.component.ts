import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() url: String;
  @Input() text: String;
  @Input() textColor: String = 'white';
  @Input() bgColor: String; //
  @Input() size: String; //extra-large, large, medium, small, extra-small
  @Input() shape: String = 'circular'; // circulare or rectangular
  @Input() showStatusIndicator: boolean = false;
  avatarStyle: any = {};
  textStyle: any = {};
  divStyle: any = {};
  statusIndicatorStyle: any = {};
  constructor() {}

  ngOnInit(): void {
    if (this.size == 'extra-large') {
      this.avatarStyle['height'] = '7em';
      this.avatarStyle['width'] = '7em';
      this.avatarStyle['margin-right'] = '0.5rem';
      // this.avatarStyle['margin-bottom'] = '0.5rem';

    } else if (this.size == 'large') {
      this.avatarStyle['height'] = '6em';
      this.avatarStyle['width'] = '6em';
      this.avatarStyle['margin-right'] = '0.5rem';
      // this.avatarStyle['margin-bottom'] = '0.5rem';
   
    } else if (this.size == 'medium') {
      this.avatarStyle['height'] = '5em';
      this.avatarStyle['width'] = '5em';
      this.avatarStyle['margin-right'] = '0.5rem';
      // this.avatarStyle['margin-bottom'] = '0.5rem';
    
    } else if (this.size == 'extra-medium') {
      this.avatarStyle['height'] = '4em';
      this.avatarStyle['width'] = '4em';
      this.avatarStyle['margin-right'] = '0.5rem';
      // this.avatarStyle['margin-bottom'] = '0.5rem';
    
    } else if (this.size == 'small') {
      this.avatarStyle['height'] = '3em';
      this.avatarStyle['width'] = '3em';
      this.avatarStyle['margin-right'] = '0.5rem';
      // this.avatarStyle['margin-bottom'] = '0.5rem';
    
    } else if (this.size == 'extra-small') {
      this.avatarStyle['height'] = '2em';
      this.avatarStyle['width'] = '2em';
      this.avatarStyle['margin-right'] = '0.5rem';
      // this.avatarStyle['margin-bottom'] = '0.5rem';
    
    }

    if (this.shape == 'circular') {
      this.avatarStyle['border-radius'] = '50%';
      if (this.size == 'extra-large') {
        this.statusIndicatorStyle['height'] = '20px';
        this.statusIndicatorStyle['width'] = '20px';
        this.statusIndicatorStyle['position'] = 'absolute';
        this.statusIndicatorStyle['top'] = '5%';
        this.statusIndicatorStyle['right'] = '12px';
        this.statusIndicatorStyle['border-radius'] = '100%';
      } else if (this.size == 'large') {
        this.statusIndicatorStyle['height'] = '18px';
        this.statusIndicatorStyle['width'] = '18px';
        this.statusIndicatorStyle['position'] = 'absolute';
        this.statusIndicatorStyle['top'] = '5%';
        this.statusIndicatorStyle['right'] = '12px';
        this.statusIndicatorStyle['border-radius'] = '100%';
      } else if (this.size == 'medium') {
        this.avatarStyle['height'] = '5em';

        this.statusIndicatorStyle['height'] = '16px';
        this.statusIndicatorStyle['width'] = '16px';
        this.statusIndicatorStyle['position'] = 'absolute';
        this.statusIndicatorStyle['top'] = '5%';
        this.statusIndicatorStyle['right'] = '12px';
        this.statusIndicatorStyle['border-radius'] = '100%';
      } else if (this.size == 'extra-medium') {
        this.statusIndicatorStyle['height'] = '14px';
        this.statusIndicatorStyle['width'] = '14px';
        this.statusIndicatorStyle['position'] = 'absolute';
        this.statusIndicatorStyle['top'] = '4%';
        this.statusIndicatorStyle['right'] = '10px';
        this.statusIndicatorStyle['border-radius'] = '100%';
      } else if (this.size == 'small') {
        this.statusIndicatorStyle['height'] = '14px';
        this.statusIndicatorStyle['width'] = '14px';
        this.statusIndicatorStyle['position'] = 'absolute';
        this.statusIndicatorStyle['top'] = '3%';
        this.statusIndicatorStyle['right'] = '5px';
        this.statusIndicatorStyle['border-radius'] = '100%';
      } else if (this.size == 'extra-small') {
        this.statusIndicatorStyle['height'] = '12px';
        this.statusIndicatorStyle['width'] = '12px';
        this.statusIndicatorStyle['position'] = 'absolute';
        this.statusIndicatorStyle['top'] = '1%';
        this.statusIndicatorStyle['right'] = '5px';
        this.statusIndicatorStyle['border-radius'] = '100%';
      }
    } else {
      this.avatarStyle['border-radius'] = '0.25rem';
      if (this.size == 'extra-large') {
        this.statusIndicatorStyle['height'] = '20px';
        this.statusIndicatorStyle['width'] = '20px';
        this.statusIndicatorStyle['position'] = 'absolute';
        this.statusIndicatorStyle['top'] = '-3%';
        this.statusIndicatorStyle['right'] = '5px';
        this.statusIndicatorStyle['border-radius'] = '100%';
      } else if (this.size == 'large') {
        this.statusIndicatorStyle['height'] = '18px';
        this.statusIndicatorStyle['width'] = '18px';
        this.statusIndicatorStyle['position'] = 'absolute';
        this.statusIndicatorStyle['top'] = '-3%';
        this.statusIndicatorStyle['right'] = '5px';
        this.statusIndicatorStyle['border-radius'] = '100%';
      } else if (this.size == 'medium') {
        this.avatarStyle['height'] = '5em';

        this.statusIndicatorStyle['height'] = '16px';
        this.statusIndicatorStyle['width'] = '16px';
        this.statusIndicatorStyle['position'] = 'absolute';
        this.statusIndicatorStyle['top'] = '-3%';
        this.statusIndicatorStyle['right'] = '5px';
        this.statusIndicatorStyle['border-radius'] = '100%';
      } else if (this.size == 'extra-medium') {
        this.statusIndicatorStyle['height'] = '14px';
        this.statusIndicatorStyle['width'] = '14px';
        this.statusIndicatorStyle['position'] = 'absolute';
        this.statusIndicatorStyle['top'] = '-3%';
        this.statusIndicatorStyle['right'] = '5px';
        this.statusIndicatorStyle['border-radius'] = '100%';
      } else if (this.size == 'small') {
        this.statusIndicatorStyle['height'] = '14px';
        this.statusIndicatorStyle['width'] = '14px';
        this.statusIndicatorStyle['position'] = 'absolute';
        this.statusIndicatorStyle['top'] = '-3%';
        this.statusIndicatorStyle['right'] = '5px';
        this.statusIndicatorStyle['border-radius'] = '100%';
      } else if (this.size == 'extra-small') {
        this.statusIndicatorStyle['height'] = '12px';
        this.statusIndicatorStyle['width'] = '12px';
        this.statusIndicatorStyle['position'] = 'absolute';
        this.statusIndicatorStyle['top'] = '-3%';
        this.statusIndicatorStyle['right'] = '5px';
        this.statusIndicatorStyle['border-radius'] = '100%';
      }
    }
    if (
      this.bgColor != undefined &&
      this.bgColor != 'none' &&
      this.bgColor != null
    ) {
      this.avatarStyle['background-color'] = this.bgColor;
    }
    if (
      this.textColor != undefined &&
      this.textColor != 'none' &&
      this.textColor != null
    ) {
      this.textStyle['color'] = this.textColor;
      this.textStyle['text-transform'] = 'uppercase';
    }

    if (this.text != undefined && this.text != 'none' && this.text != null) {
      this.avatarStyle['display'] = 'flex';
      this.avatarStyle['justify-content'] = 'center';
      this.avatarStyle['align-items'] = 'center';

      if (this.size == 'extra-large') {
        this.textStyle['font-size'] = '36px';
      } else if (this.size == 'large') {
        this.textStyle['font-size'] = '28px';
      } else if (this.size == 'medium') {
        this.textStyle['font-size'] = '20px';
      } else if (this.size == 'extra-medium') {
        this.textStyle['font-size'] = '18px';
      } else if (this.size == 'small') {
        this.textStyle['font-size'] = '12px';
      } else if (this.size == 'extra-small') {
        this.textStyle['font-size'] = '10px';
      }
    }
    if (
      this.text != undefined &&
      this.text != 'none' &&
      this.text != null &&
      this.url != undefined &&
      this.url != 'none' &&
      this.url != null
    ) {
      this.avatarStyle['display'] = 'flex';
      this.avatarStyle['justify-content'] = 'center';
      this.avatarStyle['align-items'] = 'center';
      this.textStyle['position'] = 'absolute';
      this.textStyle['width'] = '100%';
      this.textStyle['margin'] = 'auto';
      this.textStyle['text-align'] = 'center';
      this.divStyle['position'] = 'relative';

      if (this.size == 'extra-large') {
        this.divStyle['height'] = '7em';
        this.divStyle['width'] = '7em';
        this.divStyle['margin-right'] = '0.5rem';
        this.divStyle['margin-bottom'] = '0.5rem';
        this.textStyle['top'] = '25%';

        this.textStyle['font-size'] = '36px';
      } else if (this.size == 'large') {
        this.divStyle['height'] = '6em';
        this.divStyle['width'] = '6em';
        this.divStyle['margin-right'] = '0.5rem';
        this.divStyle['margin-bottom'] = '0.5rem';
        this.textStyle['top'] = '30%';

        this.textStyle['font-size'] = '28px';
      } else if (this.size == 'medium') {
        this.divStyle['height'] = '5em';
        this.divStyle['width'] = '5em';
        this.divStyle['margin-right'] = '0.5rem';
        this.divStyle['margin-bottom'] = '0.5rem';
        this.textStyle['top'] = '35%';

        this.textStyle['font-size'] = '20px';
      } else if (this.size == 'extra-medium') {
        this.divStyle['height'] = '4em';
        this.divStyle['width'] = '4em';
        this.divStyle['margin-right'] = '0.5rem';
        this.divStyle['margin-bottom'] = '0.5rem';
        this.textStyle['top'] = '30%';

        this.textStyle['font-size'] = '18px';
      } else if (this.size == 'small') {
        this.divStyle['height'] = '3em';
        this.divStyle['width'] = '3em';
        this.divStyle['margin-right'] = '0.5rem';
        this.divStyle['margin-bottom'] = '0.5rem';
        this.textStyle['top'] = '30%';

        this.textStyle['font-size'] = '12px';
      } else if (this.size == 'extra-small') {
        this.divStyle['height'] = '2em';
        this.divStyle['width'] = '2em';
        this.textStyle['top'] = '30%';
        this.divStyle['margin-right'] = '0.5rem';
        this.divStyle['margin-bottom'] = '0.5rem';

        this.textStyle['font-size'] = '10px';
      }
    }
  }
}
