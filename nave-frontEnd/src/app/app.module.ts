import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

//componentes
import { ListComponent } from './nave/list.component';
import { CreateComponent } from './nave/create.component';
import { MenuComponent } from './menu/menu.component';

//modulo externo
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';
import { DetailComponent } from './nave/detail.component';
import { FiltroNavePipe } from './pipes/filtro-nave.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    MenuComponent,
    DetailComponent,
    FiltroNavePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
