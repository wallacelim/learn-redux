import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK } from "../actionTypes";
import task from "./task";

const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return [...state, task(undefined, action)];
        case REMOVE_TASK:
            return state.filter(t => task(t, action));
        case TOGGLE_TASK:
            return state.map(t => task(t, action));
        default:
            return state;
    }
}
