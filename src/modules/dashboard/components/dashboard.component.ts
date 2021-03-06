import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Dashboard } from '../store/dashboard.model';
import { DASHBOARD_ACTIONS } from '../store/dashboard.actions';
@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent  implements OnInit {
  dashboard:Dashboard[];
  constructor(private store: Store<Dashboard>){}
  ngOnInit() {
    this.store.dispatch({ type: DASHBOARD_ACTIONS.GET_DASHBOARD_LIST });
     this.store.dispatch({ type: DASHBOARD_ACTIONS.ADD_DASHBOARD });
     
     this.store.select('dashboard').subscribe((res:any) => {
      
       this.dashboard = res;
     });
     
  }
}
