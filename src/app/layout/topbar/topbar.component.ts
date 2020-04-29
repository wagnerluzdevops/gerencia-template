import { Component, OnInit, Inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  preserveWhitespaces: true,
})
export class TopbarComponent implements OnInit {
  // logout: string = environment.logout
  miniNav = false
  constructor( @Inject(DOCUMENT) private document: Document,
   private router: Router) { }

  ngOnInit() {
  }

  toggleNavBar() {
    if(this.miniNav){
      this.document.body.classList.remove('mini-navbar')
      // this.document.body.classList.add('md-skin')
      this.miniNav = false;
    } else {
      this.document.body.classList.add('mini-navbar')
      this.miniNav = true;
    }
  }

  logout() {
    // this.loginService.logout()
    //   .then(() => {
    //     this.router.navigate(['/login']);
    //   });
     // .catch(erro => this.errorHandler.handle(erro));
  }

}
