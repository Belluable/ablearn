import { useState } from 'react';
import './App.css';
import Hello from './components/Hello';
import My from './components/My';

// mock
const SampleSession = {
  // loginUser: { id: 1, name: 'Hong', age: 26 },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

function App() {
  const [session, setSession] = useState(SampleSession);
  const [count, setCount] = useState(0);
  const plusCount = () => setCount((count) => count + 1);

  const logout = () => setSession({ ...session, loginUser: null });

  const login = (name) => {
    const id = 1;
    const age = 26;
    const x = {
      ...session,
      loginUser: { ...session.loginUser, id, name, age },
    };
    setSession(x);
  };

  const removeItem = (itemId) => {
    setSession({
      ...session,
      cart: [...session.cart.filter((item) => item.id !== itemId)],
    });
  };

  const addItem = (addingItem) => {
    const id = Math.max(...session.cart?.map((item) => item.id)) ?? 0;
    const { name, price } = addingItem;
    const item = { id: id + 1, name, price };
    console.log('id:', id);
    setSession({ ...session, cart: [...session.cart, item] });
  };

  const saveItem = (editingItem) => {
    const { id } = editingItem;
    setSession({
      ...session,
      cart: [
        ...session.cart.map((item) => (item.id === id ? editingItem : item)),
      ],
    });
  };
  return (
    <>
      <div>
        {session.loginUser && (
          <Hello
            name={session.loginUser.name}
            age={session.loginUser.age}
            plusCount={plusCount}
          />
        )}
      </div>

      <My
        session={session}
        signOut={logout}
        signIn={login}
        removeItem={removeItem}
        addItem={addItem}
        saveItem={saveItem}
      />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
