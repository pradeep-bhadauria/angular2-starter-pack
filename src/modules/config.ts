import { RouterModule, Routes } from '@angular/router';
import {OccurenceBookReducer} from './occurenceBook/store/occurenceBook.reducer';
import {DashboardReducer} from './dashboard/store/dashboard.reducer';

import {DepartmentReducer} from './department/store/department.reducer';
import {DesignationReducer} from './designation/store/designation.reducer';
import {ShiftReducer} from './shift/store/shift.reducer';
import {AreaReducer} from './area/store/area.reducer';
import {OccurenceTypeReducer} from './occurrenceType/store/occurenceType.reducer';
import {StatusReducer} from './status/store/status.reducer';
import {OccurenceReviewHistoryReducer} from './occurrenceReviewHistory/store/occurenceReviewHistory.reducer';
export const routing = [


  { path: 'ob', loadChildren: 'modules/occurenceBook/occurenceBook.module' },
  { path: 'area' , loadChildren:'modules/area/area.module' },

  { path: 'ot' , loadChildren:'modules/occurrenceType/occurenceType.module' },
  
  {path:'orh' , loadChildren:'modules/occurrenceReviewHistory/occurenceReviewHistory.module'},
  {path: 'status' , loadChildren:'modules/status/status.module'},

  { path: 'dashboard', loadChildren: 'modules/dashboard/dashboard.module' },
  { path: 'department', loadChildren: 'modules/department/department.module' },
  { path: 'shift', loadChildren: 'modules/shift/shift.module' },
  { path: 'designation', loadChildren: 'modules/designation/designation.module' },

  { path: 'employee', loadChildren: 'modules/employee/employee.module' },
  { path: 'officers', loadChildren: 'modules/officerList/officerList.module' },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }

];

export const ApiBase = "http://192.168.100.103:6070/api/";
export const ApiBaseAuthUrl = "auth/token";

export interface RootState {
}


export const moduleReducers = {
  occurenceBook:OccurenceBookReducer,
  dashboard: DashboardReducer,

  department:DepartmentReducer,
  designation:DesignationReducer,
  shift:ShiftReducer,
  area: AreaReducer,
  occurenceType:OccurenceTypeReducer,
  status:StatusReducer,
  occurrenceRH:OccurenceReviewHistoryReducer,
}
