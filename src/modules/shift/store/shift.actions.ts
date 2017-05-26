export const CONTEXT: string = 'SHIFT';

/**
 * COUNTERAction  Interface
 */
interface ISHIFTActions {
    INIT: string;
    INITIALIZED: string;
    INIT_FAILED: string;
    GET_LIST: string;
    GET_LIST_SUCCESS: string;
    GET_LIST_BY_PAGINATION: string;
    GET_LIST_BY_PAGINATION_SUCCESS: string;
    ON_FAILED: string;
    ADD_SUCCESS: string;
    ADD: string;
    DELETE_SUCCESS: string;
    DELETE: string;
    UPDATE_SUCCESS: string;
    UPDATE: string;
}

/**
 * COUNTER Actions List
 */
export const SHIFT_ACTIONS: ISHIFTActions = {
    INIT: `${CONTEXT}_INIT`,
    INITIALIZED: `${CONTEXT}_INITIALIZED`,
    INIT_FAILED: `${CONTEXT}_INIT_FAILED`,
    GET_LIST: `${CONTEXT}GET_LIST`,
    GET_LIST_SUCCESS: `${CONTEXT}GET_LIST_SUCCESS`,
    GET_LIST_BY_PAGINATION: `${CONTEXT}GET_LIST_BY_PAGINATION`,
    GET_LIST_BY_PAGINATION_SUCCESS: `${CONTEXT}GET_LIST_BY_PAGINATION_SUCCESS`,
    ADD_SUCCESS: `${CONTEXT}ADD_SUCCESS`,
    ADD: `${CONTEXT}ADD`,
    DELETE_SUCCESS: `${CONTEXT} DELETE_SUCCESS`,
    DELETE: `${CONTEXT} DELETE`,
    UPDATE_SUCCESS: `${CONTEXT}UPDATE_SUCCESS`,
    UPDATE: `${CONTEXT}UPDATE`,
    ON_FAILED: `${CONTEXT}_ON_FAILED`
};