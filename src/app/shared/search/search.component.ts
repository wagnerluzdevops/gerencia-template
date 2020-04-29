
import {distinctUntilChanged, debounceTime} from 'rxjs/operators';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'


import {trigger, state, style, transition, animate} from '@angular/animations'
@Component({
  selector: 'eac-search',
  templateUrl: './search.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        'max-height': '0px'
      })),
      state('visible', style({
        opacity: 1,
        'max-height': '70px',
        'margin-top': '20px'
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class SearchComponent implements OnInit {
  searchBarState = 'hidden'
  searchForm: FormGroup
  searchControl: FormControl
  @Output() termSubmit = new EventEmitter<string>()
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged(),)
    .subscribe(value => this.termSubmit.emit(value))
  }
  search():void {
    this.termSubmit.emit(this.searchControl.value)
  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }

}
