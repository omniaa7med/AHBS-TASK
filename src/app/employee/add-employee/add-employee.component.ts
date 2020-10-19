import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  EmpForm: FormGroup;
  planModel: any = { start_time: new Date() };
  formattedDate = this.planModel['start_time'].toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  }).replace(/ /g, '-');

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.EmpForm = this.formBuilder.group({
      Empname: ["", Validators.required],
      deparment: ["", Validators.required],
      EmpCode: [""],
      gender: [""],
      date: [this.formattedDate],
    });
    console.log(this.formattedDate)
  }
  onSubmit(form) {
    console.log(form)

  }
}
