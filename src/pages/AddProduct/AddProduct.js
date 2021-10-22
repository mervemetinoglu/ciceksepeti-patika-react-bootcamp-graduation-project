import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import "./addproduct.style.scss";
import DropDown from "../../components/DropDown/DropDown";
import SwitchButton from "../../components/SwitchButton/SwitchButton";

import categoriesAction from "../../actions/categoriesAction";
import { brandsAction } from "../../actions/brandsAction";
import { allStatusAction } from "../../actions/statusAction";
import { colorsAction } from "../../actions/colorsAction";
import { useSelector, useDispatch } from "react-redux";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { allCategories } = useSelector((state) => state.categories);
  const { allStatus } = useSelector((state) => state.allStatus);
  const { allColors } = useSelector((state) => state.colors);
  const { allBrands } = useSelector((state) => state.brands);

  const [isToggled, setIsToggled] = useState(false);

  function actionCreator() {
    return (dispatch) => {
      dispatch(categoriesAction());
      dispatch(brandsAction());
      dispatch(allStatusAction());
      dispatch(colorsAction());
    };
  }

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(actionCreator());
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <div className="addProduct__container">
        <div className="addProduct_left">
          <h2>Ürün Detayları</h2>
          <form>
            <label htmlFor="productName">Ürün Adı</label>
            <input
              type="text"
              name="productName"
              id="productName"
              placeholder="Örnek: Iphone 12 Pro Max"
              maxLength={100}
            />
            <label htmlFor="productDesc">Açıklama</label>
            <input
              type="text"
              name="productDesc"
              id="productDesc"
              placeholder="Ürün açıklaması girin"
              maxLength={500}
            />
            <div className="row">
              <div className="box">
                Kategori
                <DropDown
                  items={allCategories}
                  name="category"
                  label="Kategori"
                />
              </div>
              <div className="box">
                Marka
                <DropDown items={allBrands} name="brands" label="Marka" />
              </div>
            </div>
            <div className="row">
              <div className="box">
                Renk
                <DropDown items={allColors} name="colors" label="Renk" />
              </div>
              <div className="box">
                Kullanım Durumu
                <DropDown
                  items={allStatus}
                  name="status"
                  label="Kullanım durumu"
                />
              </div>
            </div>
            <label htmlFor="price" className="price-input">
              Fiyat
            </label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Bir fiyat girin"
              className="off"
            />
            <div className="offer-input">
              <div>Fiyat ve teklif opsiyonu</div>
              <SwitchButton
                isToggled={isToggled}
                onToggle={() => setIsToggled(!isToggled)}
              />
            </div>
          </form>
        </div>
        <div className="addProduct_right"></div>
      </div>
    </Container>
  );
};

export default AddProduct;
