import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK } from './actionTypes'

export const addTask = task => ({
    type: ADD_TASK,
    payload: {
        task
    }
})

export const removeTask = idx => ({
    type: REMOVE_TASK,
    payload: {
        idx
    }
})

export const toggleTask = idx => ({
    type: TOGGLE_TASK,
    payload: {
        idx
    }
})

// dateTimeAdded: `${date.getDate().toString().padStart(2, '0')}/
//                 ${date.getMonth().toString().padStart(2, '0')}/
//                 ${date.getFullYear().toString().padStart(4, '0')} 
//                 ${date.getHours().toString().padStart(2, '0')}:
//                 ${date.getMinutes().toString().padStart(2, '0')}`,
//         name: document.getElementById('taskInput').value,
//         completed: false