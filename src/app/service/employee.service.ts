import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  allEmp = [];
  constructor() { }
  AddEmp(employee) {
    this.allEmp.push(employee);
    console.log(this.allEmp)
  }
  getAllEmp() {
   return this.allEmp;
  }
}
