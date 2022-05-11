import React from 'react';
import { createRoot } from 'react-dom/client';
import { TodoList } from './components';
import { fetchItems } from './api';

createRoot(
  document.getElementById('TodoListApplication')
)
  .render(<TodoList fetchTodoItems={fetchItems} />);