'use client';

import { useState } from 'react';
import { Box, Container, TextInput, Button, Stack, Paper } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../store/todoSlice';
import type { RootState } from '../store/store';

export default function TodoApp() {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  return (
    <Container className="py-8">
      <Stack className="space-y-4">
        <Box className="flex space-x-2">
          <TextInput
            placeholder="Add new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="flex-1"
          />
          <Button
            onClick={() => {
              if (newTodo.trim()) {
                dispatch(addTodo(newTodo));
                setNewTodo('');
              }
            }}
          >
            Add
          </Button>
        </Box>

        <Stack>
          {todos.map((todo) => (
            <Paper key={todo.id} className="p-4 flex justify-between items-center">
              <span className={todo.completed ? 'line-through' : ''}>
                {todo.text}
              </span>
              <div className="space-x-2">
                <Button
                  onClick={() => dispatch(toggleTodo(todo.id))}
                  variant="light"
                >
                  Toggle
                </Button>
                <Button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  color="red"
                >
                  Delete
                </Button>
              </div>
            </Paper>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
