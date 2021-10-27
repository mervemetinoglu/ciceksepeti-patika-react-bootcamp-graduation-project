import "./home.scss";
import banner from "../../assets/banner.png";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from "../../components/Card/Card";
import Container from "../../components/Container/Container";
import Spinner from "../../components/Spinner/Spinner";
import Header from "../../components/Header/Header";
import Tabs from "../../components/Tab/Tab";
import productsAction from "../../actions/product/productsAction";
import categoriesAction from "../../actions/categoriesAction";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { allCategories } = useSelector((state) => state.categories);

  const history = useHistory();
  const params = new URLSearchParams(window.location.search);
  const query = params.get("query");

  const [activeTab, setActiveTab] = useState(query);

  function actionCreator() {
    return (dispatch) => {
      dispatch(productsAction());
      dispatch(categoriesAction());
    };
  }

  useEffect(() => {
    dispatch(actionCreator());
  }, [dispatch]);

  const onClickItem = (tabName) => {
    setActiveTab(tabName);
    history.push({
      pathname: "/",
      search: `?query=${tabName}`,
    });
  };

  return (
    <Container>
      <Header />
      <div className="home_container">
        <div className="home_banner">
          <img src={banner} alt="banner" />
        </div>
        <Tabs
          activeTab={activeTab}
          onClickItem={onClickItem}
          setActiveTab={setActiveTab}
        >
          {allCategories.map((category) => (
            <div label={category.title} key={category.id}></div>
          ))}
        </Tabs>
        {products.length > 0 ? (
          <div className="tab__content">
            {products
              .filter((item) =>
                query !== null ? item.category.title === query : item
              )
              .map((product) => (
                <Card product={product} key={product.id} />
              ))}
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </Container>
  );
};

export default Home;
