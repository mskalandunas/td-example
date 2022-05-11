import { useEffect, useState } from 'react';
import { Item } from './Item';

export const TodoList = ({ fetchTodoItems }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      fetchTodoItems(
        data => {
          setItems(data.items);
          setIsLoading(false);
        },
        () => {
          setHasError(true);
          setIsLoading(false);
        }
      )
    }, 500);
  }, [fetchTodoItems, setItems, setHasError]);

  if (hasError) {
    return <h1>ERROR</h1>;
  }

  if (isLoading) {
    return <h1>LOADING</h1>;
  }

  return (
    <>
      <h1>Todo List</h1>
      {items.length ?
        <ul>
          {items.map(item => <Item key={item.description} description={item.description} />)}
        </ul>
      : <h2>No items found</h2>}
    </>
  );
}