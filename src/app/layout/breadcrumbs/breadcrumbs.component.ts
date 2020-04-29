import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }


}
