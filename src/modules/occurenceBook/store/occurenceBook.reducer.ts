import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { ActionReducer, Action } from '@ngrx/store';
import { OB_ACTIONS } from './occurenceBook.actions';


export function OccurenceBookReducer(state: any[] = [], action: Action) {
  switch (action.type) {
    case OB_ACTIONS.GET_LIST_SUCCESS:
        let ob=Object.assign([],state)
        let stateOB=ob.concat(action.payload)
        return Object.assign([],state,stateOB);
    case OB_ACTIONS.GET_LIST_SUCCESS_BY_OFFICER:
        return action.payload;
    case OB_ACTIONS.ON_FAILED:
        return state;
    case OB_ACTIONS.GET_OB_SUCCESS:
        return action.payload;
    case OB_ACTIONS.CLEAR:
        return [];
    default:
        return state;
  }
}
