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
  allEmp = [];
  resetRows;
  temp;

  constructor(
    private formBuilder: FormBuilder,
    private EmployeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.displayEmployees();
    this.EmpSearchForm = this.formBuilder.group({
      Empname: [""],
      department: [""],
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                                Display Table                               */
  /* -------------------------------------------------------------------------- */

  displayEmployees() {
    this.allEmp = this.EmployeeService.getAllEmp();
    for (let emp in this.allEmp) {
      this.allEmp[emp].checked = false;
    }
    console.log(this.allEmp)
    this.resetRows = this.allEmp;
  }

  /* -------------------------------------------------------------------------- */
  /*                                 Checkbox All                               */
  /* -------------------------------------------------------------------------- */

  CheckAllOptions(value) {
    console.log(value)
    if (value == true) {
      for (let emp in this.allEmp) {
        this.allEmp[emp].checked = true;
      }
    } else {
      for (let emp in this.allEmp) {
        this.allEmp[emp].checked = false;
      }
    }
    // console.log(this.allEmp)
  }

  /* -------------------------------------------------------------------------- */
  /*                              Search in Tables                              */
  /* -------------------------------------------------------------------------- */

  search(form) {
    const empName = form.value.Empname;
    const empDep = form.value.department
    // console.log(empName);
    // console.log(empDep);
    this.allEmp = this.resetRows
    this.temp = this.allEmp.filter(emp => emp.name == empName && emp.department == empDep);
    // console.log(this.temp)
    if (this.temp != []) {
      // console.log(this.temp)
      this.allEmp = this.temp;
    } else {
      // console.log(this.temp)
      this.allEmp = this.resetRows
    }
    if (empName == "" || empName == "") {
      this.allEmp = this.resetRows;
    }
    // console.log(this.resetRows)
  }
}
