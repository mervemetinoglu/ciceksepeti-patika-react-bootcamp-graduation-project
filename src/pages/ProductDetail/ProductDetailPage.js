import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productAction from "../../actions/productAction";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import Spinner from "../../components/Spinner/Spinner";
import Header from "../../components/Header/Header";
import ProductDetailComponent from "../../components/ProductDetail/ProductDetail";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const { id } = useParams();

  useEffect(() => {
    dispatch(productAction(id));
  }, [dispatch, id]);

  return (
    <Container>
      <Header />
      {Object.keys(product).length > 0 ? (
        <ProductDetailComponent />
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

export default ProductDetailPage;
