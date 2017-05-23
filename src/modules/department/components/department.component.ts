import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Department } from '../store/department.model';
import { DEPARTMENT_ACTIONS } from '../store/department.actions';
import { Patch } from '../../patchReq.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DepartmentService } from '../services/department.service';

@Component({
  moduleId: module.id,
  selector: 'app-department',
  templateUrl: 'department.component.html',
  styleUrls:['department.component.css']
})
export class DepartmentComponent  implements OnInit {
  departmentList:any=[]
  tableRows: number = 10;
  totalRecords: any;
  departmentForm: FormGroup;
  constructor(private store: Store<any>, 
   private formBuilder: FormBuilder,
   private departmentService:DepartmentService ){}

  ngOnInit() {
    this.getList({pageNumber:1,pageSize:10})
    this.resetForm()
    this.store.select('department').subscribe((res:any) => {
        if (res.departmentList && res.departmentList.length > 0) {
           this.departmentList = res.departmentList;
           this.totalRecords = res.pagination.totalCount;
        }
     });
  }
  getList(pageOptions){
     this.store.dispatch({ type: DEPARTMENT_ACTIONS.GET_LIST_PAGINATION, payload:pageOptions });
  }
  loadLazy(event: any) {
    let pageOptions: any = {};
    pageOptions.pageNumber = event.first == 0 ? 1 : Math.ceil(parseFloat((event.first / event.rows).toString())) + 1
    pageOptions.pageSize = event.rows;
    this.tableRows=event.rows;
    this.getList(pageOptions)
  }
  onEdit(department){
     this.departmentForm = this.formBuilder.group({
            departmentID:department.departmentID,
            departmentName: department.departmentName,
            departmentDespcription: department.departmentDespcription,
      });
  }
  resetForm(){
      this.departmentForm = this.formBuilder.group({
            departmentID:[0],
            departmentName: ['', [Validators.required]],
            departmentDespcription: ['', [Validators.required]]
      });
  }
  onSubmit({ value, valid }: { value: any, valid: boolean }) {
    if(value.departmentID!==0 && value.departmentID!=null){
      this.departmentService.saveDepartment(value.id,value).subscribe(
                results=> {
                    this.getList({pageNumber:1,pageSize:10})
                    this.resetForm()
                });
      } else {
           this.departmentService.addDepartment(value).subscribe(
                results=> {
                    this.getList({pageNumber:1,pageSize:10})
                    this.resetForm()
                });
    }
  }
  onDelete(dept:any) {
        this.departmentService.deleteDepartment(dept.departmentID).subscribe(
            results => {
                    this.resetForm();
                    this.getList({pageNumber:1,pageSize:10})
              });
  }
}



