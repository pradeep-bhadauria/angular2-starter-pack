import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { empty } from 'rxjs/observable/empty';
import { Observable } from 'rxjs/Observable';
import { Employee, initialEmployee } from './employee.model';
import { EMPLOYEE_ACTIONS } from './employee.actions';
import { EmployeeService } from '../services/employee.service';
import { BaseService } from '../../../app/core/services/index';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class EmployeeEffects  {

  @Effect({ dispatch: false })
  private getListEmployee$ = this.actions$
    .ofType(EMPLOYEE_ACTIONS.GET_LIST)
   .switchMap(action => 
       this.EmployeeService.getEmployees()
        .map(res =>{
          this.store.dispatch({ type: EMPLOYEE_ACTIONS.GET_LIST_SUCCESS, payload: res })
        })
        .catch(() => Observable.of({ type: EMPLOYEE_ACTIONS.ON_FAILED  }))
      );
 @Effect({ dispatch: false })
  private addEmployee$ = this.actions$
    .ofType(EMPLOYEE_ACTIONS.ADD)
   .switchMap(action => {
    return this.EmployeeService.addEmployee(action.payload)
        .map(res =>{
          this.store.dispatch({ type: EMPLOYEE_ACTIONS.ADD_SUCCESS, payload: res.json() })
        })
        .catch(() => Observable.of({ type: EMPLOYEE_ACTIONS.ON_FAILED  }))
   }
       
      );
  @Effect({ dispatch: false })
  private updateEmployee$ = this.actions$
    .ofType(EMPLOYEE_ACTIONS.UPDATE)
   .switchMap(action => 
        this.EmployeeService.saveEmployee(action.payload.id,action.payload.updates)
        .map(res =>{
          this.store.dispatch({ type: EMPLOYEE_ACTIONS.UPDATE_SUCCESS, payload: res.json() })
        })
        .catch(() => Observable.of({ type: EMPLOYEE_ACTIONS.ON_FAILED  }))
      );
  @Effect({ dispatch: false })
  private deleteEmployee$ = this.actions$
    .ofType(EMPLOYEE_ACTIONS.DELETE)
   .switchMap(action => 
       this.EmployeeService.deleteEmployee(action.payload)
        .map(res =>{
          this.store.dispatch({ type: EMPLOYEE_ACTIONS.DELETE_SUCCESS, payload: res.json() })
        })
        .catch(() => Observable.of({ type: EMPLOYEE_ACTIONS.ON_FAILED  }))
      );
  @Effect({ dispatch: false })
  private getEmployeeByPage$ = this.actions$
    .ofType(EMPLOYEE_ACTIONS.GET_LIST_BY_PAGE)
   .switchMap(action => 
       this.EmployeeService.getEmployeesByPage(action.payload.pageNum,action.payload.pageSize)
        .map(res =>{
          this.store.dispatch({ type: EMPLOYEE_ACTIONS.GET_LIST_BY_PAGE_SUCCESS, payload: res })
        })
        .catch(() => Observable.of({ type: EMPLOYEE_ACTIONS.ON_FAILED  }))
      );
  constructor(
    private store: Store<Employee>,
    private actions$: Actions,
    private EmployeeService: EmployeeService,
    public http: Http
  ) { }
}
