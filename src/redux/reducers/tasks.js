import { ADD_TASK, TOGGLE_TASK } from '../actionTypes';


const initialState = [];

const task = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                dateTimeAdded: action.dateTimeAdded,
                name: action.name,
                completed: false
            };
        case 'REMOVE_TASK':
            return state.name !== action.name
        case 'TOGGLE_TASK':
            if (state.name !== action.name) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state;
    }

}

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, task(undefined, action)];
        case 'REMOVE_TASK':
            return state.filter(task => task(task, action));
        case 'TOGGLE_TASK':
            return state.map(task => {
                task(task, action);
            });
        default:
            return state;
    }
}
export default tasks;