import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from "../../service/employee.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  EmpForm: FormGroup;
  allEmp = [];

  /* -------------------------------------------------------------------------- */
  /*                                GET-DATE-TODAY                              */
  /* -------------------------------------------------------------------------- */

  planModel: any = { start_time: new Date() };
  formattedDate = this.planModel['start_time'].toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  }).replace(/ /g, '-');

  constructor(
    private formBuilder: FormBuilder,
    private EmployeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.EmpForm = this.formBuilder.group({
      Empname: ["", Validators.required],
      deparment: ["", Validators.required],
      EmpCode: ["", Validators.required],
      gender: ["", Validators.required],
      date: [this.formattedDate, Validators.required],
    });
    // console.log(this.formattedDate)
  }

  /* -------------------------------------------------------------------------- */
  /*                            ADD-EMPLOYEE-SUBMIT                             */
  /* -------------------------------------------------------------------------- */

  onSubmit(form) {
    console.log(form)
    let Employee = {
      'name': form.value.Empname,
      'department': form.value.deparment,
      'birthday': form.value.date['day'] + '-' + form.value.date['month'] + '-' + form.value.date['year'],
      'code': form.value.EmpCode,
      'gender': form.value.gender
    }
    console.log(Employee);
    this.EmployeeService.AddEmp(Employee);
    form.reset();
  }
}
