import { useEffect, useReducer } from 'react';
import { useCount } from '../hooks/counter-context';
import Button from './atoms/Button';

export default function Hello(props) {
  const { plusCount } = useCount();

  const [isActive, setIsActive] = useState(false);
  const [isValid, toggleValid] = useReducer((pre) => !pre, false);

  useEffect(() => {}, []);

  return (
    <>
      <h1 onClick={plusCount} style={{ cursor: 'pointer' }}>
        Hello, {props.name}!
        <small className="font-sm text-red-500">({props.age + 1})</small>!
        Active: {isActive ? 'T' : 'F'}, Valid: {isValid ? 'T' : 'F'}
      </h1>
      <Button text="Ative" onClick={() => setIsActive(!isActive)} />
      <Button text="Valid" onClick={toggleValid} />
    </>
  );
}
