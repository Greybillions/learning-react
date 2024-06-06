import ColorPicker from './assets/ColorPicker.jsx';
import FoodList from './assets/FoodList.jsx';
import OnChangeDemo from './assets/OnChange/OnChange.jsx';
import Prop from './assets/Prop/Prop.jsx';
import UseState from './assets/UseState/UseState.jsx';

function App() {
  return (
    <>
      <Prop name='Graham Boyle' age={18} isProgrammer={true} />
      <Prop name='Grey' age={20} isProgrammer={true} />
      <Prop name='Dev Grey' age={25} isProgrammer={true} />
      <Prop />
      <UseState />
      <OnChangeDemo />
      <ColorPicker />
      <FoodList />
    </>
  );
}

export default App;