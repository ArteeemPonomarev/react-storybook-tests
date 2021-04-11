import {reducer, StateType, TOGGLE_CONSTANT} from './reducer';

test('collapsed shoul be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOGGLE_CONSTANT});
    //expection
    expect(newState.collapsed).toBe(true)
    expect(() => reducer(state, {type: 'FAKETYPE'})).toThrowError()
})

export const abc = 1;