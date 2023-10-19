import React, { FC } from 'react';
import { Box, Container, styled } from '@mui/material';
import Page from 'components/helmet-page';
import MainTodo from 'components/_todo-list/Todo';

interface ITodoListProps {
  [key: string]: unknown;
}

const TodoList: FC<ITodoListProps> = ({}) => {
  return (
    <Page>
      <Container>
        <MainTodo />
      </Container>
    </Page>
  );
};

export default TodoList;
