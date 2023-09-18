import axios from 'axios';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export interface ITodos {
  todos: ITodo[];
  getTodos: (todos: ITodo[]) => void;
  addTodo: (todo: ITodo) => void;
  deleteTodo: (id: string) => void;
  checkTodo: (id: string) => void;
}

export interface ITodo {
  id: string;
  text: string;
  checked: boolean;
}

const useQuerys = () => {
  const queryClient = useQueryClient();

  const [todos, setTodos] = useState<ITodo[]>([]);

  const getTodos = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');

      const list = res.data.slice(0, 20).map((todo: any) => ({
        id: todo.id,
        text: todo.title,
        checked: todo.completed,
      }));

      setTodos(list);

      return list;
    },
  });

  const addTodo = useMutation({
    mutationFn: async (todo: ITodo) => {
      setTodos([...todos, todo]);
    },
  });

  const checkTodos = useMutation({
    mutationFn: async (id: string) =>
      setTodos((prev) =>
        prev.map((todo: ITodo) => {
          if (todo.id === id) {
            return { ...todo, checked: !todo.checked };
          }
          return todo;
        })
      ),
  });

  const deleteTodo = useMutation({
    mutationFn: async (id: string) =>
      setTodos((prev) => prev.filter((todo) => todo.id !== id)),
  });

  return { todos, getTodos, addTodo, checkTodos, deleteTodo };
};

export default useQuerys;
