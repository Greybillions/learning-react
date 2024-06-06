import { useState } from 'react';

function OnChangeDemo() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState('');
  const [payment, setPayment] = useState('');
  const [shipping, setShipping] = useState('Delivery');

  const handleNameChange = (e) => setName(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);
  const handleCommentChange = (e) => setComment(e.target.value);
  const handlePaymentChange = (e) => setPayment(e.target.value);
  const handleShippingChange = (e) => setShipping(e.target.value);

  return (
    <>
      <div className='onchange'>
        <h2>Place Your Order</h2>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input type='number' value={quantity} onChange={handleQuantityChange} />
        <p>Quantity: {quantity}</p>

        <textarea
          placeholder='Enter delivery instructions'
          onChange={handleCommentChange}
        ></textarea>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
          <option value=''>Select an option</option>
          <option value='Visa'>Visa</option>
          <option value='Mastercard'>Mastercard</option>
          <option value='Giftcard'>Giftcard</option>
          <option value='Cash on Delivery'>Cash</option>
        </select>
        <p>Payment: {payment}</p>

        <div className='radio'>
          <label>
            <input
              type='radio'
              value={'Pick Up'}
              checked={shipping === 'Pick Up'}
              onChange={handleShippingChange}
            />
            Pick Up
          </label>
          <label>
            <input
              type='radio'
              value={'Delivery'}
              checked={shipping === 'Delivery'}
              onChange={handleShippingChange}
            />
            Delivery
          </label>

          <p> Shipping: {shipping}</p>
        </div>
      </div>
    </>
  );
}

export default OnChangeDemo;
