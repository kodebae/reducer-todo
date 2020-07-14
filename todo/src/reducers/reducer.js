// import React, { useState, useReducer } from 'react';


export const reducer = (state, action) => {
    switch(action.type){
    case 'add-todo':
    return {
         todos: [...state.todos, { text: action.text, completed: false }]
        };
    case 'toggle-todo':
        return {
            todos: state.todos.map((t, idx) => idx === action.idx ? { ...t, completed: !t.completed } : t 
            )
        };
    default:
        return state;
    }
}


