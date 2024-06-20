import { useState } from 'react';
import './App.css';
import Hello from './components/Hello';
import My from './components/My';

const SampleSession = {
  loginUser: { id: 1, name: 'Hong', age: 26 },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

function App() {
  const [session, setSession] = useState(SampleSession);
  const [count, setCount] = useState(0);
  const plusCount = () => setCount(count + 1);

  const logout = () => {
    setSession({ ...session, loginUser: null });
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

      <My session={session} signOut={logout} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
