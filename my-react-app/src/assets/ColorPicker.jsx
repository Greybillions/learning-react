import { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('#fff');
  const handleColorChange = (e) => setColor(e.target.value);

  return (
    <div className='color-picker-container'>
      <h2>Color Picker</h2>
      <div className='color-display' style={{ background: color }}>
        <p>Select a color : {color}</p>
      </div>
      <div>
        <label> Select a color: {color}</label>
        <input type='color' value={color} onChange={handleColorChange} />
      </div>
    </div>
  );
};

export default ColorPicker;
