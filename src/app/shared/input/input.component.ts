import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms'
import { expand } from '../../app.animation'
@Component({
  selector: 'app-input-container',
  templateUrl: './input.component.html',
  animations: [ expand()]
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string
  @Input() errorMessage: string
  @Input() showTip: boolean = true
  @Input() labelCol = 'col-sm-2 control-label'
  @Input() inputCol = 'col-sm-10'
  input: any

  // @ContentChild(NgModel) model: NgModel
  // @ContentChild(FormControlName) control: FormControlName

  @ContentChild(NgModel, {static: false}) model: NgModel;
  @ContentChild(FormControlName, {static: false}) control: FormControlName;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model || this.control
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser iniciado com uma diretiva ngModel ou formControlName')
    }
  }
  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }
  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
