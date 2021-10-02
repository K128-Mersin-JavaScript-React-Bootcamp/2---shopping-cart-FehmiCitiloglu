import { useState, useEffect } from "react";

const UserPage = (props) => {
  const [loading, setLoading] = useState();

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setLoading(true);
  //     const res = await axios.get(
  //       "https://api.npoint.io/3a5ea76fb9a0acf96d50/products"
  //     );
  //     setProducts(res.data);
  //     setLoading(false);
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <div>
      <p>User Informations</p>
      <p>User Informations</p>
      <p>User Informations</p>
      <p>User Informations</p>
      <p>User Informations</p>
      <p>User Informations</p>
      <p>User Informations</p>
      <p>User Informations</p>
      <p>User Informations</p>
    </div>
  );
};

export default UserPage;
