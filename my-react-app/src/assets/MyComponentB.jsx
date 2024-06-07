import MyComponentC from './MyComponentC';

const MyComponentB = () => {
  return (
    <div className='box'>
      <h2>My Component B</h2>
      <MyComponentC />
    </div>
  );
};

export default MyComponentB;
