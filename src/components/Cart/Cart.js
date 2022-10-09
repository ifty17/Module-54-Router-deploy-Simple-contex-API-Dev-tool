import React from 'react';
import './Cart.css';


const Cart = ({ cart, handleRemoveItem }) => {

    let massage;
    if(cart.length === 0){
        massage = <p>Please buy at least one item !!!</p>
    }
    else if (cart.length === 1){
        massage = (
          <div>
            <h3>Buy one for me</h3>
            <p>Buy another one for you</p>
            <p>
              <small>Buy another one for my daddy</small>
            </p>
          </div>
        );
    }
    else{
        massage = <p>Thanks for buying!</p>
    }

  return (
    <div>
      <h2 className={cart.length === 2 ? `orange` : `purple`}>Order summary</h2>
      <h5 className={`bold ${cart.length == 2 ?`blue` : `yellow`}`}>Order quantity: {cart.length}</h5>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveItem(tshirt)}>X</button>
        </p>
      ))}
      {
        massage
      }
      {
        cart.length === 3 ? <p>3 jon ke gift diba?</p> : <p>kino kino aro kino</p>
      }
      <p>And Operator</p>
      {cart.length === 2 && <h2>Double Item</h2>}
      <p>Or Operator</p>
      {cart.length === 4 || <p>4 ta item na </p>}
    </div>
  );
};

export default Cart;

/* 
Conditional Rendering
1. use element in variable and then use if-else to set value
2. Ternary operator condition ? true : false
3. && operator (if condition is true, I want to display something)
4. || or operator (if condition is false, I want to display something)
*/