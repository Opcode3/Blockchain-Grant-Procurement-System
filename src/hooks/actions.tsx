import { MODAL_COMPONENT } from "./states"

export type REDUCER_ACTION_TYPE = {
    type: REDUCER_ACTION,
    payload: MODAL_COMPONENT,
}

export enum REDUCER_ACTION{
    MODAL_VISIBILITY_TOGGLE,
    MODAL_SWITCH_COMPONENT
}