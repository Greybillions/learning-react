import { useState } from 'react';

const UseState = () => {
  const [name, setName] = useState('Guest');
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const setNewName = () => {
    setName('Graham Boyle');
  };
  const setNewAge = () => {
    setAge(age + 1);
  };

  const toggleIsEmployed = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <>
      <div>
        <h2>Name: {name} </h2>
        <button onClick={setNewName}>Set Name</button>
      </div>
      <div>
        <h2>Age: {age}</h2>
        <button onClick={setNewAge}>New Age</button>
      </div>
      <div>
        <h2>Is Employed: {isEmployed ? 'Yes' : 'No'}</h2>
        <button onClick={toggleIsEmployed}>Toggle Employed</button>
      </div>
    </>
  );
};

export default UseState;
