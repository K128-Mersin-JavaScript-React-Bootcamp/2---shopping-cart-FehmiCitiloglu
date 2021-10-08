import { Button, Input } from "antd";
import classes from "./CartPage.module.css";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useSelector } from "react-redux";

const CartPage = (props) => {
  const items = useSelector((state) => state.cart.items);
  //  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPrices = items.map((item) => item.totalPrice);

  const totalAmount = totalPrices.reduce((a, b) => a + b, 0);

  const productItems = items.map((item) => (
    <CartProduct
      key={item.id}
      id={item.id}
      image={item.image}
      name={item.name}
      quantity={item.quantity}
      price={item.price}
      totalPrice={item.totalPrice}
    />
  ));
  console.log(totalAmount);
  return (
    <div className={classes["cart-page"]}>
      <div>
        <h2>Your Cart</h2>
        <Link to="./shop">Not ready to checkout? Continue Shopping</Link>
        {productItems}
      </div>
      <div className={classes.summary}>
        <h5>Order Summary</h5>
        <Input
          className={classes.coupon}
          placeholder="Enter coupon code here"
          allowClear
        />
        <div className={classes.order}>
          <div>
            <div>
              <p>SubTotal</p>
              <p>$ 200</p>
            </div>
            <div>
              <p>Shipping</p>
              <p>Calculated at the next step</p>
            </div>
            <hr />
            <div>
              <p>Total</p> <p>$ {totalAmount}</p>
            </div>
          </div>
        </div>
        <Button>Continue to checkout</Button>
      </div>
    </div>
  );
};

export default CartPage;
