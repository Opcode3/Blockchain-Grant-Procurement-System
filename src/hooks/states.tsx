export interface APP_STATES_TYPE {
    modal_visibility: boolean,
    modal_type: MODAL_COMPONENT,
    content?: React.ReactElement
}

export enum MODAL_COMPONENT{
    EMPTY, DELETE, DELETE_TRASH, DELECT_SCHEDULE, DELETE_DRAFT, CATEGORY_EDIT
}

export const initialState: APP_STATES_TYPE = {
    modal_visibility: false,
    modal_type: MODAL_COMPONENT.EMPTY,
};


