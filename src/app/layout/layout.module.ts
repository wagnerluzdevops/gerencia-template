import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { ActionAreaComponent } from './action-area/action-area.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { MenuComponent } from './menu/menu.component';
import { HeadingComponent } from './heading/heading.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [ActionAreaComponent, BreadcrumbsComponent, ContentComponent, FooterComponent,
    HeadingComponent, MenuComponent, TopbarComponent, HomeLayoutComponent],
exports: [ActionAreaComponent, BreadcrumbsComponent, ContentComponent, FooterComponent,
  HeadingComponent, MenuComponent, TopbarComponent, HomeLayoutComponent]
})
export class LayoutModule { }
