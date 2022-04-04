import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  HostListener,
  EventEmitter,
  Output,
} from '@angular/core';
export interface DropDownItem {
  label: string;
  value: string;
  prefixIcon?: string;
  selectedPrefixIcon?: string;
  suffixText?: string;
  defaultSelected: boolean;
  isSeperator?: boolean;
}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() dropDownType: string = 'Dropdown'; // DropDown, Menu , Customize
  @Input() dropDownLabel: string = 'Select Item';
  @Input() dropDownItem: any = [];
  @Input() selectedItemStyle: any = {};
  @Input() unSelectedItemStyle: any = {};
  @Input() dropDownStyle: any = {};
  @Input() dropDownMenuStyle: any = {};
  @Input() dropDownCustomizeStyle: any = {};
  @Input() suffixStyle: any = {};

  @Output() callBackFunction: EventEmitter<any> = new EventEmitter();

  prefixStyle: any = {};
  constructor() {}

  inside = false;
  @ViewChild('dropDownSelect') dropDownSelect: ElementRef;
  @ViewChild('dropDownMenu') dropDownMenu: ElementRef;
  @HostListener('click')
  clicked() {
    this.inside = true;
  }
  @HostListener('document:click')
  clickedOut() {
    if (!this.inside) {
      this.dropDownMenu.nativeElement.classList.remove('show');
      if (this.dropDownType == 'Dropdown') {
        this.dropDownSelect.nativeElement.setAttribute(
          'style',
          `width:${this.dropDownStyle['width'] ?? '200px'};`
        );
      }
    }
    this.inside = false;
  }

  ngOnInit(): void {
    this.dropDownItem.forEach((element: any) => {
      if (element['defaultSelected']) {
        element['isSelected'] = true;
      } else {
        element['isSelected'] = false;
      }
    });
    this.dropDownStyle['width'] = this.dropDownStyle['width'] ?? '200px';
    this.dropDownMenuStyle['width'] = this.dropDownStyle['width'] ?? '200px';
    this.prefixStyle['height'] = '14px';
    this.prefixStyle['width'] = '14px';
    this.prefixStyle['vertical-align'] = 'top';
    this.prefixStyle['margin-right'] = '0.7rem';
  }
  itemClickHandler(data: any) {
    this.dropDownItem.forEach((element: any) => {
      if (element['label'] == data['label']) {
        element['isSelected'] = true;
      } else {
        element['isSelected'] = false;
      }
    });
    this.dropDownLabel = data['label'];
    this.callBackFunction.emit(data['value']);
    this.dropDownMenu.nativeElement.classList.remove('show');
    if (this.dropDownType == 'Dropdown') {
      this.dropDownSelect.nativeElement.setAttribute(
        'style',
        `width:${this.dropDownStyle['width'] ?? '200px'};`
      );
    }
  }

  myFunction() {
    this.dropDownMenu.nativeElement.classList.toggle('show');
    if (this.dropDownType == 'Dropdown') {
      this.dropDownSelect.nativeElement.setAttribute(
        'style',
        `width:${
          this.dropDownStyle['width'] ?? '200px'
        }; box-shadow: 0px 0px 0px 2px rgba(76, 111, 255, 0.3);`
      );
    }
  }
}
