import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK } from "./actionTypes";

export const addTask = task => ({
    type: ADD_TASK,
    payload: {
        dateTimeAdded: task.dateTimeAdded,
        name: task.name
    }
});

export const removeTask = task => ({
    type: REMOVE_TASK,
    payload: {
        task
    }
});

export const toggleTask = task => ({
    type: TOGGLE_TASK,
    payload: {
        task
    }
});
