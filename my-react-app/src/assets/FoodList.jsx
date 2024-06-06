import { useState } from 'react';

const FoodList = () => {
  const [foods, setFood] = useState(['rice', 'beans', 'plantain', 'chicken']);

  const handleAddFood = () => {
    const newFood = document.querySelector('#foodinput').value;

    if (newFood) {
      setFood((f) => [...f, newFood]);
      document.querySelector('#foodinput').value = '';
    }
  };

  const handleRemoveFood = (index) => {
    setFood(foods.filter((_, i) => i !== index));
  };

  return (
    <div className='foodlist'>
      <h2>Food List</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <div>
        <input type='text' id='foodinput' placeholder='add new food item' />
        <button onClick={handleAddFood}>Add Food</button>
      </div>
    </div>
  );
};

export default FoodList;
