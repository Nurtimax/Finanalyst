import React, { FC } from 'react';
import { Box } from '@mui/material';
import { ITodoList } from './Todo';
import TodoItem from './TodoItem';

interface ITodoListProps {
  [key: string]: unknown;
  todos: ITodoList[];
}

const TodoList: FC<ITodoListProps> = ({ todos }) => {
  return (
    <Box>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </Box>
  );
};

export default TodoList;
