import "./modals.css";

const CartModal = () => {
  return (
    <div className="cart-modal">
      <div className="cart-head">
        <h3>Cart</h3>
      </div>
      <div className="cart-body">
        <p>Your cart is empty</p>
      </div>
    </div>
  );
};

export default CartModal;
