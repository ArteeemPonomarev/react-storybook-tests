export type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED';

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return {...state, collapsed: !state.collapsed};
        default:
            throw new Error('Bad action type')
    }
}