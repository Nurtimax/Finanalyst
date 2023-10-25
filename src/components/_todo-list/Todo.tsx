import React, { FC, useCallback, useState } from 'react';
import { Box, styled } from '@mui/material';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

interface ITodoProps {
  [key: string]: unknown;
}
export interface ITodoList {
  title: string;
  id: string;
}

const MainTodo: FC<ITodoProps> = ({}) => {
  const [todos, setTodos] = useState<ITodoList[]>([]);

  const addTodo = useCallback((newTodo: ITodoList) => {
    setTodos((prev) => [...prev, newTodo]);
  }, []);

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <Box>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </Box>
  );
};

export default MainTodo;