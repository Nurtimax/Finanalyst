import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { ITodoList } from './Todo';

interface ITodoItemProps extends ITodoList {
  [key: string]: unknown;
}

const StyledTodoItem = styled(Box)(() => ({}));

const TodoItem: FC<ITodoItemProps> = ({ title }) => {
  return <StyledTodoItem>{title}</StyledTodoItem>;
};

export default TodoItem;
