import {
  useContext,
  createContext,
  useState,
  useCallback,
  useReducer,
} from 'react';

const sessionCeontext = createContext();

// mock
const SampleSession = {
  // loginUser: { id: 1, name: 'Hong', age: 26 },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

// reducer로 바꿔보기
const reducer = (session, action) => {};

const SessionProvider = ({ children }) => {
  const [session, setSession] = useReducer(reducer, SampleSession);

  const logout = useCallback(
    () => setSession({ ...session, loginUser: null }),
    [session]
  );

  const login = useCallback(
    (name) => {
      const id = 1;
      const age = 26;
      const x = {
        ...session,
        loginUser: { ...session.loginUser, id, name, age },
      };
      setSession(x);
    },
    [session]
  );

  const removeItem = useCallback(
    (itemId) => {
      setSession({
        ...session,
        cart: [...session.cart.filter((item) => item.id !== itemId)],
      });
    },
    [session]
  );

  const addItem = useCallback(
    (addingItem) => {
      const id = Math.max(...session.cart.map((item) => item.id)) ?? 0;
      const { name, price } = addingItem;
      const item = { id: id + 1, name, price };
      console.log('id:', id);
      setSession({ ...session, cart: [...session.cart, item] });
    },
    [session]
  );

  const saveItem = useCallback(
    (editingItem) => {
      const { id, name, price } = editingItem;
      const foundItem = session.cart.find((item) => item.id === id);
      foundItem.name = name;
      foundItem.price = price;
      setSession({ ...session }); // session은 바껴도 cart는 바뀌지 않는다.
    },
    [session]
  );

  return (
    <sessionCeontext.Provider
      value={{ session, login, logout, removeItem, saveItem, addItem }}
    >
      {children}
    </sessionCeontext.Provider>
  );
};

const useSession = () => useContext(sessionCeontext);

export { SessionProvider, useSession };
