import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('viewAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0 }),
        animate('900ms 0s ease-in-out')
      ])
    ])
  ],

})
export class HomeComponent implements OnInit {


  constructor( ) { }

  ngOnInit() {

  }

}
