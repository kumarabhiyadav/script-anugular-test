import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent implements OnInit {
  @Input() placeholder: String;
  @Input() helpertext: String;
  @Input() bgColor: String;
  @Input() type: String;
  @Input() inputStyle: any;
  @Input() helperTextStyle: any;
  @Input() labelStyle: any;
  @Input() label: any;
  @Input() label2: any;
  @Input() url: any;
  @Input() checkboxandradio: any;
  @Input() checkboxandradiowrap: any;
  @Input() labelcontainer: any;
  @Input() id: any;
  @Input() disabled: any;





  // showtextInputFields: boolean; checkboxandradio checkboxandradiowrap labelcontainer checkboxRadioInput



  constructor() { }

  ngOnInit(): void {
    if (this.url != null && this.url != "") {
      this.inputStyle['padding']= '7px 33px'
    }

    // if (this.type == "radio" && this.type == "checkbox") {

    // }

  }

}
