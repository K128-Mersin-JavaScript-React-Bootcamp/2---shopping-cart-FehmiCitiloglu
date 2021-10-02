import classes from "./CartPage.module.css";
import { useSelector } from "react-redux";
import { Button } from "antd";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const CartProduct = (props) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(cartActions.removeItem(props.id));
  };
  const cartItems = useSelector((state) => state.cart.items);

  const items = (
    <div key={props.id}>
      <div className={classes.products}>
        <img src={props.image} alt="" />
        <div className={classes.productInfo}>
          <h3>{props.name}</h3>
          <p>Size: L</p>
          <p>Quantity: {props.quantity}</p>
          <h3>$ {props.price}</h3>
          <h3> total for product:$ {props.totalPrice.toFixed(2)}</h3>
        </div>
        <Button onClick={removeHandler}>Remove</Button>
      </div>
      <hr />
      <div className={classes.products}></div>
    </div>
  );

  return <div>{items}</div>;
};

export default CartProduct;
