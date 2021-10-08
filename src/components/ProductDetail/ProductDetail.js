import { Row, Col, Button, Rate } from "antd";
import classes from "./ProductDetail.module.css";
import { cartActions } from "../../store/cart.js";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";

import { useState, useEffect } from "react";
import { productActions } from "../../store/products";

const ProductDetail = () => {
  let history = useHistory();
  const [productCount, setProductCount] = useState(1);
  let { id } = useParams();

  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(productActions.getProductById(id));
  }, [dispatch, id]);
  console.log("productdetail çalıştı");
  const product = useSelector((state) => state.prod.product);

  const addToCartHandle = () => {
    if (isAuth) {
      if (productCount !== 0) {
        dispatch(
          cartActions.addItemToCart({
            item: product,
            productCount: productCount,
          })
        );
      }
    } else {
      history.push("/login");
      <Link to="/login" />;
    }
  };
  const increaseHandler = () => {
    setProductCount((prevState) => prevState + 1);
  };
  const decreaseHandler = () => {
    if (productCount !== 0) {
      setProductCount((prevState) => prevState - 1);
    }
  };
  return (
    <div className={classes["product-detail"]}>
      <Row gutter={30} justify="center">
        <Col md={12}>
          <div className={classes.deneme1}>
            <img
              src={product.image}
              alt=""
              style={{
                position: "relative",
                left: 100,
                width: 271,
              }}
            />
          </div>
        </Col>
        <Col md={12}>
          <div className={classes.deneme2}>
            <h2>{product.name}</h2>
            <div className={classes.price}>
              <strong>$ {product.price}</strong>
              <div>
                <p>{product.rating.rate}</p>
                <Rate />
              </div>
            </div>
            <p>{product.rating.count} değerlendirme</p>
            <p>{product.description}</p>
            <Row>
              <Col md={14}>
                <Button
                  block
                  style={{
                    background: "black",
                    color: "wheat",
                  }}
                  onClick={addToCartHandle}
                >
                  Add to Cart
                </Button>
              </Col>

              <Col
                md={4}
                style={{
                  border: "1px solid gray",
                  textAlign: "center",
                  float: "right",
                  background: "#E5E5E5",
                  marginLeft: "20px",
                }}
              >
                <div className={classes.quantity}>
                  <Button onClick={decreaseHandler}>-</Button>
                  {productCount}
                  <Button onClick={increaseHandler}>+ </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default ProductDetail;
