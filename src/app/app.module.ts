import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import {
  HttpClientModule,
  HttpClient,
} from "@angular/common/http";
import { ModalModule } from "ngx-bootstrap/modal";
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EmployeesTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
