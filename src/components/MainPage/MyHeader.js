// import { useState, useContext } from "react";

import { Layout, Menu, Input, AutoComplete, Button } from "antd";
import { SearchOutlined, ShoppingOutlined } from "@ant-design/icons";
import "./MyHeader.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice.js";


const { Header } = Layout;

// values to compare with input value
const mockVal = (str: string, repeat: number = 1) => ({
  value: str.repeat(repeat),
});

const MyHeader = () => {
  const dispatch = useDispatch();

  // const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    dispatch(authActions.logout());
    // dispatch(authCtx.onLogout());
  };

  const isAuth = useSelector((state) => state.auth.isAuthenticated);
 
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Header className="my-header">
      <Menu mode="horizontal" defaultSelectedKeys={["1"]} className="navbar">
        <Menu.Item key="1" style={{ fontWeight: "bold" }}>
          <NavLink to="/" activeClassName="">
            E-commerce
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/shop">Shop</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/stories">Stories</NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/about">About</NavLink>
        </Menu.Item>
      </Menu>
      <span className="search-bar">
        <SearchOutlined
          style={{
            position: "relative",
            top: "25px",
            left: "-5px",
            zIndex: "2",
          }}
        />
        <Input placeholder="Search" bordered={false} allowClear />
      </span>
      <NavLink to="/cart">
        <button className="cart-icon">
          <ShoppingOutlined width={10} />
          <span className="cart-count">{totalQuantity}</span>
        </button>
      </NavLink>
      <br />
      {!isAuth && (
        <h3>
          <NavLink to="/login">Login</NavLink>
        </h3>
      )}
      {isAuth && (
        <h3>
          <NavLink to="/">
            <Button onClick={logoutHandler}>Logout</Button>
          </NavLink>
        </h3>
      )}
      <hr />
    </Header>
  );
};

export default MyHeader;
