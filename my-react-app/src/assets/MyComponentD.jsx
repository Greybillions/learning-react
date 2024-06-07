import { useContext } from 'react';
import { userContext } from './MyComponentA';

const MyComponentD = () => {
  const user = useContext(userContext);

  return (
    <div className='box'>
      <h2>My Component D</h2>
      <p>Good bye {user}</p>
    </div>
  );
};

export default MyComponentD;
