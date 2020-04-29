import { NgModule, ErrorHandler, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common';
import locatePt from '@angular/common/locales/pt';
// registerLocaleData(locatePt, 'pt')

import { AppComponent } from './app.component';


// Import defaults modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import modules
import { ToastrModule } from 'ngx-toastr';

// Import custom modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';

// Import components
import { HomeComponent } from './home/home.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';


// IMPORT INTERCEPTORS

import {HTTP_INTERCEPTORS} from '@angular/common/http';


// JWT
import { JwtHelper } from 'angular2-jwt';
  // TODO: ver se posso incluir no modulo core !

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BaseLayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    LayoutModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule

  ],
  bootstrap: [AppComponent],
  providers: [
    // {
    //   provide: LOCALE_ID, useValue: 'pt'
    // },
    JwtHelper,
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    },
    ]
})
export class AppModule { }
