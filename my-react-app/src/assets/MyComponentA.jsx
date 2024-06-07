import { useState, createContext } from 'react';
import MyComponentB from './MyComponentB';

export const userContext = createContext();

const MyComponentA = () => {
  const [user, setUser] = useState('Graham');
  return (
    <div className='box'>
      <h2>My Component A</h2>
      <p>Hello {user}</p>
      <userContext.Provider value={user}>
        <MyComponentB user={user} />
      </userContext.Provider>
    </div>
  );
};

export default MyComponentA;
