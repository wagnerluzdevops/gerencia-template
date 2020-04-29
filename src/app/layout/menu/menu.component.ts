import { Component, OnInit, AfterContentInit } from '@angular/core';

import { ASSETSPATH } from '../../app.api';

declare let $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit, AfterContentInit {

   ngAfterContentInit(): void {
    setTimeout(() => {
      $('#side-menu').metisMenu();
    }, 3000);
  }
// tslint:disable-next-line: member-ordering
  localassetspath: string;

  // tslint:disable-next-line: member-ordering
  menus: any[] = [
    {
      label: 'Pessoas',
      link: null,
      icon: 'fa-group',
      submenus: [
        { label: 'Pessoas', link: '/pessoa', icon: '' },
      ]
    },
    {
      label: 'Cargos',
      link: null,
      icon: 'fa-cubes',
      submenus: [
        { label: 'Visualizar', link: '/cargosver', icon: '' },
        { label: 'Editar', link: '/cargosedit', icon: '' },
      ]
    },

  ];

  constructor() {}

  ngOnInit() {
    this.assetspath();
  }

  assetspath() {
    this.localassetspath = `${ASSETSPATH}`;
  }
}
