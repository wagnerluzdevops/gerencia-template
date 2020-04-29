import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateComponent } from './paginate/paginate.component';
import { SelectPerPageComponent } from './select-per-page/select-per-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { WidgetComponent } from './widget/widget.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { BooleanPipe } from './pipes/boolean.pipe';
import { CepPipe } from './pipes/cep.pipe';
import { TipoEmailPipe } from './pipes/tipo-email.pipe';
import { SexoPipe } from './pipes/sexo.pipe';
import { RouterModule } from '@angular/router';
import { RacaPipe } from './pipes/raca.pipe';
import { SituacaoPipe } from './pipes/situacao.pipe';
import { FocusDirective } from './directives/focus.directive';
import { LoadingDirective } from './directives/loading.directive';
import { FormDebugComponent } from './form-debug/form-debug.component';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    PaginateComponent,
    SelectPerPageComponent,
    SearchComponent,
    InputComponent,
    RadioComponent,
    WidgetComponent,
    BooleanPipe, CpfPipe,
    CepPipe, TipoEmailPipe,
    SexoPipe,
    RacaPipe,
    SituacaoPipe,
    FocusDirective,
    LoadingDirective,
    FormDebugComponent
  ],
  exports: [
    PaginateComponent,
    SelectPerPageComponent,
    SearchComponent,
    InputComponent,
    RadioComponent,
    WidgetComponent,
    BooleanPipe,
    CpfPipe,
    CepPipe,
    TipoEmailPipe,
    SexoPipe,
    RacaPipe,
    SituacaoPipe,
    FocusDirective,
    LoadingDirective,
    FormDebugComponent
  ]
})
export class SharedModule { }
