import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'eac-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  @Input() label:string
  @Input() value:string
  @Input() color:string
  @Input() icon:string

  constructor() { }

  ngOnInit() {
  }

}
