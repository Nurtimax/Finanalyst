import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import { ITodoList } from './Todo';

interface ITodoItemProps extends ITodoList {
  [key: string]: unknown;
}

const TodoItem: FC<ITodoItemProps> = ({ title }) => {
  return <Box>{title}</Box>;
};

export default TodoItem;
