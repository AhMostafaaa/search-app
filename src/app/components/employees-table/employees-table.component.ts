import { Component, OnInit,TemplateRef } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent implements OnInit {
   
  modalRef: BsModalRef;
  employeesContainer = [];
  returnedEmployee = [];
  total:number;
  p: number = 1;
  constructor(public _employeesSer:EmployeesService,private modalService: BsModalService,) { }

  ngOnInit(): void {
           this.getData();
  }
  getData(){
    this._employeesSer.getJsonFile().subscribe(data => {
      this.employeesContainer = data.data.employees;
     
      this.total = data.data.employees.length
    })
  }
  openTemplate(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: "modal-sm statusModal modal-dialog-centered",
    });
  }

}
