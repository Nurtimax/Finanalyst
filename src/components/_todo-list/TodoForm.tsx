import React, { FC, FormEvent, memo } from 'react';
import { Box, Button, TextField, styled } from '@mui/material';
import { ITodoList } from './Todo';

interface ITodoFormProps {
  [key: string]: unknown;
  addTodo: (newTodo: ITodoList) => void;
}

const TodoForm: FC<ITodoFormProps> = memo(({ addTodo }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const newTodo: ITodoList = {
      title: target.todo.value,
      id: `${Math.round(Math.random() * 100000000000000)}`
    };

    addTodo(newTodo);

    target.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <TextField InputProps={{ name: 'todo' }} />
      <Button type="submit">Add</Button>
    </form>
  );
});

export default TodoForm;
