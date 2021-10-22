import "./home.scss";
import banner from "../../assets/banner.png";
import React, { useEffect, useState, useCallback } from "react";
import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";
import Spinner from "../../components/Spinner/Spinner";
import Header from "../../components/Header/Header";
import Tabs from "../../components/Tab/Tab";
import { useDispatch, useSelector } from "react-redux";
import productsAction from "../../actions/productsAction";
import categoriesAction from "../../actions/categoriesAction";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { allCategories } = useSelector((state) => state.categories);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const params = new URLSearchParams(window.location.search);
  const query = params.get("query");

  const filterProducts = () => {
    const filteredData = [...products].filter((product) =>
      query ? product.category.title === query : product
    );
    setFilteredProducts(filteredData);
    console.log(filteredData);
  };

  

  useEffect(() => {
    let isMounted = true;

    if (isMounted && !products.length) {
      dispatch(productsAction());
      dispatch(categoriesAction());
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch, products.length]);

  // useEffect(() => {
  //   if (products.length) filterProducts();
  // }, [products.length, filterProducts]);

  return (
    <Container>
      <Header />
      <div className="home_container">
        <div className="home_banner">
          <img src={banner} alt="banner" />
        </div>
        {products.length > 0 ? (
          <>
            <Tabs isFilter={true}  filterProducts={filterProducts} label={query} >
              {allCategories.map((category) => (
                <div label={category.title} key={category.id}></div>
              ))}
            </Tabs>
            <div className="tab__content">
              {filteredProducts.map((product) => (
                <Card product={product} key={product.id} />
              ))}
            </div>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </Container>
  );
};

export default Home;
