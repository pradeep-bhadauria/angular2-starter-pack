import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './components/employee/employee.component';
import { OfficerListComponent } from './components/officerList/officerList.component';
import { ActivityFeedComponent } from './components/activityFeed/activityFeed.component';
import { AssignOfficerComponent } from './components/assignOfficer/assignOfficer.component';
import { AuthGuard } from '../../app/core/index';
import { EmployeeListComponent } from './components/list/list.component';
import { EmployeeSaveComponent } from './components/add/add.component';
const routes: Routes = [
  // {
  //   path: '',
  //   component: EmployeeComponent,
  //   data: {
  //     //permissions: ['EMPLOYEE_READ']
  //   },
  //   canActivate: [AuthGuard],
  // },
  {
    path: 'officerList',
    component: OfficerListComponent,
    data: {
      permissions: ['EP.R']
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'activityFeed',
    component: ActivityFeedComponent,
    data: {
      permissions: ['EP.R']
    },
    canActivate: [AuthGuard],
  }, {
    path: 'assign-officer',
    component: AssignOfficerComponent,
    data: {
      permissions: ['OB.U']
    },
    canActivate: [AuthGuard],
  },
    {
    path: '',
    component: EmployeeListComponent,
    data: {
      permissions: []
    },
     canActivate: [AuthGuard],
    
  },
  {
    path: 'save',
    component: EmployeeSaveComponent,
    data: {
      permissions: []
    },
     canActivate: [AuthGuard],
    
  },
  {
    path: 'save/:employeeID',
    component: EmployeeSaveComponent,
    data: {
      permissions: []
    },
     canActivate: [AuthGuard],
    
  },
];

export const routedComponents = [EmployeeComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRouting { }