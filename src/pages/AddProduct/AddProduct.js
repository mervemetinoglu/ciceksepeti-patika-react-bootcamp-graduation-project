import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./addproduct.style.scss";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Drop from "../../components/DropDown/Drop";
import SwitchButton from "../../components/SwitchButton/SwitchButton";
import FileUpload from "../../components/FileUpload/FileUpload";

import categoriesAction from "../../actions/categoriesAction";
import allStatusAction from "../../actions/statusAction";
import colorsAction from "../../actions/colorsAction";
import brandsAction from "../../actions/brandsAction";
import createProductAction from "../../actions/product/createProductAction";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { allCategories } = useSelector((state) => state.categories);
  const { allStatus } = useSelector((state) => state.allStatus);
  const { allColors } = useSelector((state) => state.colors);
  const { allBrands } = useSelector((state) => state.brands);
  const { imageUrl } = useSelector((state) => state.file);

  const [isToggled, setIsToggled] = useState(false);

  const [brand, setBrand] = useState({
    id: "",
    title: "",
  });
  const [color, setColor] = useState({
    id: "",
    title: "",
  });
  const [status, setStatus] = useState({
    id: "",
    title: "",
  });
  const [category, setCategory] = useState({
    id: "",
    title: "",
  });

  const [product, setProduct] = useState({
    price: 0,
    imageUrl: "",
    title: "",
    description: "",
    isOfferable: false,
  });

  function actionCreator() {
    return (dispatch) => {
      dispatch(categoriesAction());
      dispatch(brandsAction());
      dispatch(allStatusAction());
      dispatch(colorsAction());
    };
  }

  useEffect(() => {
    dispatch(actionCreator());
  }, [dispatch]);

  useEffect(() => {
    setProduct({
      ...product,
      status: status,
      category: category,
      brand: brand,
      color: color,
      imageUrl: imageUrl.url,
    });
  }, [status, color, brand, category, imageUrl]);

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(createProductAction(product));
  };

  return (
    <Container>
      <Header />
      <div className="addProduct__container">
        <div className="addProduct_left">
          <h2>Ürün Detayları</h2>
          <form onSubmit={handleForm}>
            <div className="product-detail">
              <label htmlFor="productName">Ürün Adı</label>
              <input
                type="text"
                name="title"
                id="productName"
                onChange={(e) =>
                  setProduct({ ...product, title: e.target.value })
                }
                placeholder="Örnek: Iphone 12 Pro Max"
                maxLength={100}
              />
            </div>
            <div className="product-detail">
              <label htmlFor="productDesc">Açıklama</label>
              <textarea
                name="description"
                id="productDesc"
                maxLength={500}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
                className="desc-input"
                placeholder="Ürün açıklaması girin"
              ></textarea>
            </div>

            <div className="dropdown-row">
              <Drop
                options={allCategories}
                selected={category}
                setSelected={setCategory}
                name="Kategori"
              />
              <Drop
                options={allBrands}
                selected={brand}
                setSelected={setBrand}
                name="Marka"
              />
            </div>
            <div className="dropdown-row">
              <Drop
                options={allColors}
                selected={color}
                setSelected={setColor}
                name="Renk"
              />
              <Drop
                options={allStatus}
                selected={status}
                setSelected={setStatus}
                name="Kullanım Durumu"
              />
            </div>
            <div className="custom-price-container">
              <div>Fiyat</div>
              <input
                type="text"
                name="price"
                id="price"
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
                className="price-input"
                placeholder="Bir fiyat girin"
              />
              <label htmlFor="price">TL</label>
            </div>
            <div className="offer-input">
              <div>Fiyat ve teklif opsiyonu</div>
              <SwitchButton
                isToggled={isToggled}
                onToggle={() => {
                  setIsToggled(!isToggled);
                  setProduct({ ...product, isOfferable: true });
                }}
              />
            </div>
            <button type="submit" className="submit-btn">
              Kaydet
            </button>
          </form>
        </div>
        <div className="addProduct_right">
          <div>
            <h2>Ürün Görseli</h2>
            <FileUpload />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AddProduct;
