import { useState, createContext } from 'react';
import MyComponentB from './MyComponentB';

export const userContext = createContext();

const MyComponentA = () => {
  const [user, setUser] = useState('Graham');

  const handleUser = () => {
    setUser('Dev__Grey');
  };

  return (
    <div className='box'>
      <h2>My Component A</h2>
      <p>Hello {user}</p>
      <button onClick={handleUser}> Set Name</button>
      <userContext.Provider value={user}>
        <MyComponentB user={user} />
      </userContext.Provider>
    </div>
  );
};

export default MyComponentA;
