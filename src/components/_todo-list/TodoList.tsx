import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { ITodoList } from './Todo';
import TodoItem from './TodoItem';

interface ITodoListProps {
  [key: string]: unknown;
  todos: ITodoList[];
}

const StyledTodoList = styled(Box)(() => ({}));

const TodoList: FC<ITodoListProps> = ({ todos }) => {
  return (
    <StyledTodoList>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </StyledTodoList>
  );
};

export default TodoList;
