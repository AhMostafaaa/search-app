import { Component, OnInit,TemplateRef } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { employees } from 'src/datamodel/employees.model';
@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent implements OnInit {
   
  modalRef: BsModalRef;
  employeesContainer:employees[] = [];
  firstName:string;
  salary:string;
  HDate:any;
  page: number = 1;
  constructor(public _employeesSer:EmployeesService,private modalService: BsModalService,) { }

  ngOnInit(): void {
           this.getData();
  }

  getData(){
    this._employeesSer.getJsonFile().subscribe(data => {
      this.employeesContainer = data.data.employees;
    })
  }

  searchByName(){
    if(this.firstName != '') {
      this.employeesContainer = this.employeesContainer.filter((result) => {
        return  result.fullName_FL.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    } else if (this.firstName == ''){
          this.ngOnInit()
    } 

  };

  searchBySalary(){
      if(this.salary != ''){
        this.employeesContainer = this.employeesContainer.filter((result) => {
          return  result.firstContractingSalary.match(this.salary);
        })
      } else if (this.salary == ''){
        this.ngOnInit()
  } 
};
  searchByDate(){
      if(this.HDate != '') {
        this.employeesContainer = this.employeesContainer.filter((result) => {
          return  result.hiringDate.match(this.HDate);
        })
      }else if (this.HDate == ''){
        this.ngOnInit()
  } 

  };

  openTemplate(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: "modal-sm statusModal modal-dialog-centered",
    });
  }

}
