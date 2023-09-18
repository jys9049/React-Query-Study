import useQuerys from '../query/useQuery';
import { useEffect, useState } from 'react';

const Query = () => {
  // const { data: postsData } = usePosts();
  const { todos, getTodos, addTodo, checkTodos, deleteTodo } = useQuerys();

  const [input, setInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    console.info(todos.length);
  }, [todos]);

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', gap: '24px' }}>
        <input
          type='text'
          style={{ width: '400px', height: '50px' }}
          onChange={handleChange}
        />
        <button
          style={{
            width: '60px',
            backgroundColor: 'white',
            border: '1px solid',
          }}
          onClick={() =>
            addTodo.mutate({
              id: String(todos.length + 1),
              text: input,
              checked: false,
            })
          }
        >
          추가
        </button>
      </div>
      {todos.map((todo) => {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginRight: '12px',
            }}
          >
            <h4 style={{ color: todo.checked ? 'red' : 'black' }}>
              {todo.id}. {todo.text}
            </h4>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                style={{
                  backgroundColor: todo.checked ? 'red' : 'white',
                  width: '24px',
                  height: '24px',
                }}
                onClick={() => checkTodos.mutate(todo.id)}
              >
                V
              </button>
              <button
                style={{
                  backgroundColor: 'white',
                  width: '24px',
                  height: '24px',
                }}
                onClick={() => deleteTodo.mutate(todo.id)}
              >
                X
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Query;
