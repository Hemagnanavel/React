import React, { useState } from 'react';

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "practice coding"
    },
    {
      id: 2,
      checked: true,
      item: "play cricket"
    },
    {
      id: 3,
      checked: false,
      item: "learn React"
    }
  ]);

  return (
    <main>
      <ul>
        {items.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => {
                setItems(prevItems =>
                  prevItems.map(item =>
                    item.id === todo.id
                      ? { ...item, checked: !item.checked }
                      : item
                  )
                );
              }}
            />
            {todo.item}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
