import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'eac-select-per-page',
  templateUrl: './select-per-page.component.html'
})
export class SelectPerPageComponent implements OnInit {

  @Input() perPage: number
  @Output() perPageSelected = new EventEmitter<number>()

  selectForm: FormGroup
  selectControl:FormControl
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.selectControl = this.fb.control(5)
    this.selectForm = this.fb.group({
      selectControl: this.selectControl
    })
    this.selectControl.valueChanges
    .subscribe(value => this.perPageSelected.emit(value))
  }



}
