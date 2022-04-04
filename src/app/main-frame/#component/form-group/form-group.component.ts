import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

  @Input() mainTitle:any  
  @Input() subTitle:any
  @Input() name:any 
  @Input() emailorPhonenumber:any  
  @Input() Password:any 
  @Input() placeHolder1:any 
  @Input() placeHolder2:any 
  @Input() placeHolder3:any 
  @Input() helperText:any 
  @Input() bgColor:string 
  @Input() formtype:string 

  headStyle:any ={};
  containerBgColor:any={}
  input:any={}
  btn:any={}
  helpermeassage:any={}

  constructor() { }

  ngOnInit(): void {

    if(   
      this.bgColor != undefined &&
      this.bgColor != 'none' &&
      this.bgColor != null){
        this.containerBgColor['background-color'] = this.bgColor;
        this.containerBgColor['border-radius'] = "10px";
        this.containerBgColor['padding'] = "30px 20px";
        this.headStyle['text-align'] = "left";
        this.input['border'] = "solid 1px grey";
        this.input['background-color'] = "#EDF2F7";
        this.input['padding'] = "10px 10px";
        this.input['border-radius'] = "5px";  

        this.btn["border"] = "none";
        this.btn['border-radius'] = "5px";
        this.btn['margin-top'] = "10px";
        this.btn['padding'] = "10px 16px";
        this.btn['font-size'] = "14px";
        this.btn['background-color'] = "#4C6FFF";
        this.btn['color'] = "#ffffff";

        this.helpermeassage['font-size'] = "11px";
        this.helpermeassage['color'] = "#718096";
        this.helpermeassage['margin-top'] = "5px";

      }else{
        this.containerBgColor['border-radius'] = "10px";
        this.containerBgColor['padding'] = "30px 20px";
        this.containerBgColor['box-shadow'] = "0px 0px 5px 0px rgba(0,0,0,0.15)";
        this.containerBgColor['-webkit-box-shadow'] = "0px 0px 5px 0px rgba(0,0,0,0.15)";
        this.containerBgColor['-moz-box-shadow'] = "0px 0px 5px 0px rgba(0,0,0,0.15)";
        this.headStyle['text-align'] = "center";
        this.input['border'] = "solid 1px grey";
        this.input['background-color'] = "#FFFFFF";
        this.input['padding'] = "10px 10px";
        this.input['border-radius'] = "5px";

        this.btn["border"] = "none";
        this.btn['border-radius'] = "5px";
        this.btn['margin-top'] = "10px";
        this.btn['padding'] = "10px 16px";
        this.btn['font-size'] = "14px";
        this.btn['width'] = "100%";
        this.btn['background-color'] = "#4C6FFF";
        this.btn['color'] = "#ffffff";

        this.helpermeassage['font-size'] = "11px";
        this.helpermeassage['color'] = "#718096";
        this.helpermeassage['margin-top'] = "5px";
      } 

  }

  authHandler(userInfo:any){
    //console.log('its working...', userInfo)
    //console.log('its working...', userInfo.value.checked)
    //console.log('its working...', userInfo.value.name)
    //console.log('its working...', userInfo.value.email)
    //console.log('its working...', userInfo.value.password)

  }

}
