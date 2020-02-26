import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK } from "../actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                dateTimeAdded: action.payload.dateTimeAdded,
                name: action.payload.name,
                completed: false
            };
        case REMOVE_TASK:
            return state !== action.payload.task;
        case TOGGLE_TASK:
            if (state !== action.payload.task) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};
