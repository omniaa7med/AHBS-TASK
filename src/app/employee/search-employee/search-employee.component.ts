import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { EmployeeService } from "../../service/employee.service";

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss']
})
export class SearchEmployeeComponent implements OnInit {
  EmpSearchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private EmployeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.displayEmployees();
    this.EmpSearchForm = this.formBuilder.group({
      Empname: ["", Validators.required],
      deparment: ["", Validators.required],
    });
  }
  allEmp=[];
  displayEmployees() {
   this.allEmp =  this.EmployeeService.getAllEmp();
  }
  onSubmit(form) {
    console.log(form)
  }
}
