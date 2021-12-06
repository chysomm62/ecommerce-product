import "./modals.css";

const CartModal = (props) => {
  const { products, currentQty, setCurrentQty } = props;

  console.log(currentQty, products);
  return (
    <div className="cart-modal">
      <div className="cart-head">
        <h3>Cart</h3>
      </div>

      <div className="cart-body">
        {currentQty > 0 ? (
          <>
            {products.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <div>
                  {item.price} x {currentQty}
                  <strong>${item.price * currentQty}</strong>
                </div>
                <button onClick={setCurrentQty(0)}>bit</button>
              </div>
            ))}
            <button>checkout</button>
          </>
        ) : (
          <div>
            {" "}
            <p>Your cart is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
