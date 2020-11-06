import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EmployeesTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
