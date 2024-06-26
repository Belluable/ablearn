import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import Login from './Login';
import Profile from './Profile';
import Button from './atoms/Button';
import SampleAtoms from './atoms/SampleAtoms';
import { MemoedItemEdit } from './ItemEdit';
import { useCount } from '../hooks/counter-context';
import { useSession } from '../hooks/session-context';
import Hello from './Hello';

export default function My() {
  const {
    session: { loginUser, cart },
    addItem,
    saveItem,
    removeItem,
  } = useSession();

  const [isAdding, setIsAdding] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const { count } = useCount();

  const cancelAdding = () => {
    setIsAdding(false);
  };

  //test useEffect
  const [time, setTime] = useState(
    Math.round(new Date().getTime() / 1000) % 1000
  );

  useEffect(() => {
    const intl = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    return () => {
      // console.log('intl clear!');
      clearInterval(intl);
    };
  }, []);

  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const { signal } = controller;
  //   console.log('fetch!');
  //   fetch('https://jsonplaceholder.typicode.com/posts', { signal })
  //     .then((res) => res.json())
  //     .then((data) => setPosts(data))
  //     .catch((err) => console.error(err));

  //   return () => {
  //     console.log('abort!');
  //     controller.abort();
  //   };
  // }, []);

  useLayoutEffect(() => {
    // console.log('useLayoutEffect');
  }, []);

  const addingItem = useMemo(() => ({ name: '', price: 1000 }), []);

  const editing = useCallback(
    (itemId) => {
      console.log('🚀 ~ My ~ itemId:', itemId);
      const item = cart.find((item) => item.id === itemId);
      setEditingItem(item);
      setPrePrice(item.price);
    },
    [cart]
  );

  const [totalPriceToggleFlag, setTotalPriceToggleFlag] = useState(false);
  const [prePrice, setPrePrice] = useState(0);

  const totalPirce = useMemo(() => {
    console.warn('totalPirce>>', totalPriceToggleFlag);
    return cart?.reduce((acc, item) => acc + item.price, 0);
  }, [cart, totalPriceToggleFlag]);

  const cancelEditing = useCallback(() => {
    setEditingItem(null);
    setPrePrice(0);
  }, []);

  const editItem = useCallback(
    (item) => {
      saveItem(item);
      if (prePrice !== item.price)
        setTotalPriceToggleFlag(!totalPriceToggleFlag);

      // setTotalPriceToggleFlag(prePrice !== item.price);
    },
    [saveItem, prePrice, totalPriceToggleFlag]
  );

  return (
    <>
      {loginUser && (
        <div>
          <Hello name={loginUser.name} age={loginUser.age} />
        </div>
      )}

      {loginUser ? <Profile /> : <Login />}

      <h1>
        Second: {time} - {count}
      </h1>

      <div className="my-5 border text-center">
        <ul>
          {cart?.length
            ? cart.map((item) => (
                <li key={item.id} className="flex justify-between border-b">
                  {editingItem?.id === item.id ? (
                    <MemoedItemEdit
                      item={editingItem}
                      cancel={cancelEditing}
                      save={editItem}
                    />
                  ) : (
                    <>
                      <span className="text-xs text-gray-300">{item.id}</span>
                      <strong>
                        {item.name}
                        <small className="ml-2 text-gray-500">
                          ({item.price.toLocaleString()}원)
                        </small>
                      </strong>
                      <div>
                        <Button
                          onClick={() => editing(item.id)}
                          type="primary"
                          text={<FaEdit />}
                          size="xs"
                          className="py-1"
                        />
                        <Button
                          onClick={() => {
                            if (confirm('삭제하시겠습니까?'))
                              removeItem(item.id);
                          }}
                          type="danger"
                          text={<FaTrashAlt />}
                          size="xs"
                          className="py-1"
                        />
                      </div>
                    </>
                  )}
                </li>
              ))
            : '장바구니가 비었습니다.'}
        </ul>
        <h3 className="text-left text-green-500 pl-3">
          total: {totalPirce.toLocaleString()}
        </h3>
        {isAdding ? (
          <MemoedItemEdit
            item={addingItem}
            cancel={cancelAdding}
            save={addItem}
          />
        ) : (
          <Button
            onClick={() => setIsAdding(true)}
            text="+ 상품추가"
            className="mt-5"
          />
        )}
      </div>

      <SampleAtoms />
    </>
  );
}
