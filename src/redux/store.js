// !!! ЦЕ СТАРИЙ ФАЙЛ !!!
// всі слайси рознесені по файлах src/redux/tasksSlice.js та filtersSlice.js

import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import filtersReducer from "./filtersSlice_old";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

/*
// 1. Оголошуєм початкове значення стану Redux
const initialState = {
  tasks: {
    items: [
      {
        id: 0,
        text: "Learn HTML and CSS",
        completed: true,
      },
      {
        id: 1,
        text: "Get good at JavaScript",
        completed: true,
      },
      { id: 2, text: "Master React", completed: false },
      { id: 3, text: "Discover Redux", completed: false },
      {
        id: 4,
        text: "Build amazing apps",
        completed: false,
      },
    ],
  },
  filters: {
    status: "all",
  },
};

// 2. Передаємо початкове значення стану Redux
// const rootReducer = (state = initialState, action) => {

// Розділимо обробку екшенів завдань та зміни фільтра на два незалежних редюсера tasksReducer та filtersReducer.
const tasksReducer = (
  state = initialState.tasks,
  action,
) => {
  switch (action.type) {
    // Додання завдання
    case "tasks/addTask": {
      return {
        // Потрібно повернути копію об'єкту поточного стану
        // в якому є всі дані існуючого стану
        ...state,
        // та новий масив задач в якому є всі існуючі завдання
        // а також об'єкт нового завдання
        items: [...state.items, action.payload],
      };
    }
    // Видалення завдання
    case "tasks/deleteTask":
      return {
        ...state,
        items: state.items.filter(
          task => task.id !== action.payload,
        ),
      };
    // Зміна статусу "completed"
    case "tasks/toggleCompleted":
      return {
        ...state,
        items: state.items.map(task => {
          if (task.id !== action.payload) {
            return task;
          }
          return {
            ...task,
            completed: !task.completed,
          };
        }),
      };

    default:
      return state;
  }
};

// Відповідає лише за оновлення властивості filters
// Значенням параметра state буде об'єкт фільтрів
const filtersReducer = (
  state = initialState.filters,
  action,
) => {
  switch (action.type) {
    // Зміна фільтра
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

// Код оголошення редюсерів слайсів
export const store = configureStore({
  // reducer: rootReducer,
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
*/
