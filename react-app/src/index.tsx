import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoListPage } from './pages/todo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <TodoListPage/>
  </React.StrictMode>
);
