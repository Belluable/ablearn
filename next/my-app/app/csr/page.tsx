'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { User, getUsers } from '@/lib/placeholder';
import { Button } from '../../components/ui/button';

export default function CSR() {
  console.log('CSR!!!!!!!!!!!', new Date());
  const [dtStr, setDtStr] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setDtStr(new Date().toString());

    (async () => {
      const userData = await getUsers();
      console.log('users=', userData);
      setUsers(userData);
    })();
  }, []);

  function searchName(event: MouseEvent<HTMLInputElement>) {
    event.preventDefault;
  }

  return (
    <>
      <h1>This is About Page!! {dtStr}</h1>
      {/* <Link href='/'>GoHome</Link> */}
      <Button>GoHome</Button>
      <hr className='w-24 mt-3' />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/ssg/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
