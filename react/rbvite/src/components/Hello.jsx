// import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { useCount } from '../hooks/counter-context';

// Hello.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number,
// };

export default function Hello(props) {
  const { plusCount } = useCount();

  useEffect(() => {}, []);

  return (
    <h1 onClick={plusCount} style={{ cursor: 'pointer' }}>
      Hello, {props.name}!
      <small className="font-sm text-red-500">({props.age + 1})</small>!
    </h1>
  );
}
